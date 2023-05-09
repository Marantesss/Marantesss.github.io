---
title: "The Making of Decorators to Options API Transpiler"
author: "Gonçalo Marantes"
tags:
    - dx
    - typescript
    - Vue
    - tools
    - compilers
description: "A somewhat detailed explanation of the technical implementation of the Decorators to Options API Transpiler"
image: "articles/the-making-of-decorators-to-options-api/shannon-mclaughlin-StANDo0NiJg-unsplash.jpg"
publishedAt: "2023-04-09"
time: "20 mins"
---

## A brief introduction to the project

By the end of 2023 [Vue 2 will reach its End of Life](https://v2.vuejs.org/lts/). For that reason, infraspeak's web application project must migrate from Vue 2 to Vue 3. However, the most important obstacle is that Vue 3 doesn’t support [Class style components](https://class-component.vuejs.org/), which is the syntax we've been using. For this reason, the first step for the Vue version upgrade should be to remove [Class style components](https://class-component.vuejs.org/) and the [`vue-property-decorators`](https://github.com/kaorun343/vue-property-decorator) library and use the [Options API](https://vuejs.org/api/options-state.html#options-state) for all components.

In order to aid in this migration, the [Decorators to Options API Transpiler](https://github.com/Marantesss/decorators-to-object-api-transpiler) project started its development back in January 30, with the goal of **batch migrating vue single file components** ([SFC](https://vuejs.org/guide/scaling-up/sfc.html)) to a Vue 3 compatible syntax, i.e the [Options API](https://vuejs.org/api/options-state.html#options-state) syntax. And as a result, deprecating the use of these libraries.

There is however, some [community powered libraries](https://facing-dev.github.io/vue-facing-decorator/#/) which mimic this syntax and developer experience for Vue 3. However, the vue core team is pushing the use of the [composition API](https://vuejs.org/api/composition-api-setup.html#composition-api-setup) due to many reasons, including better performance, code reusability, and typescript support.

<!-- You can read more about the project on:
- [GitHub Repository](https://github.com/Marantesss/decorators-to-object-api-transpiler)
- [Slide deck for Feb 7th Engineering Days presentation (View Mode)]()
- [Roadmap Project Notion Page]() -->

## The plan

The initial project consisted of Proof of Concept, which simply needed to read a Vue SFC using a class syntax, extract its `<script>` content and generate the corresponding code following the Options API syntax. First thing's first though, the web client project was using Vue version [`2.6.11`](https://github.com/vuejs/vue/blob/main/CHANGELOG.md#2611-2019-12-13), and needed a desperate update to the latest Vue 2 version - [`2.7.14`](https://github.com/vuejs/vue/blob/main/CHANGELOG.md#2714-2022-11-09). While were at it, lets also update some packages.

This is a crucial step as with the release of Vue [`2.7`](https://github.com/vuejs/vue/blob/main/CHANGELOG.md#270-2022-07-01) we got a lot of cool new features, which will be key in improving our developer experience with the Options API. Such as:

- `defineComponent()` with improved type inference (compared to `Vue.extend`) similar to Vue 3;
- The `emits` option is also supported, but only for type-checking purposes (does not affect runtime behavior)
- And much more 🎉

The generated component should cover all functionalities:

| Class-based syntax  | Options API Syntax |
|---------------------|--------------------|
| [`@Prop`](https://github.com/kaorun343/vue-property-decorator#-propoptions-propoptions--constructor--constructor---decorator) | [`props`](https://vuejs.org/api/options-state.html#props) |
| [`@Watch`](https://github.com/kaorun343/vue-property-decorator#-watchpath-string-options-watchoptions---decorator) | [`watch`](https://vuejs.org/api/options-state.html#watch) |
| [`@Emit`](https://github.com/kaorun343/vue-property-decorator#-emitevent-string-decorator) | `$emit` method with [`emits`](https://vuejs.org/api/options-state.html#emits) option will allow us to have type support 🎉 |
| [`@Ref`](https://github.com/kaorun343/vue-property-decorator#-refrefkey-string-decorator) | `$ref` property only, since [`expose`](https://vuejs.org/api/options-state.html#expose) is only available for Vue 3 😢 |
| [`Data`](https://class-component.vuejs.org/guide/class-component.html#data) | [`data`](https://vuejs.org/api/options-state.html#data) function |
| [`Methods`](https://class-component.vuejs.org/guide/class-component.html#methods) | [`methods`](https://vuejs.org/api/options-state.html#methods) |
| [`Lifecycle Hooks`](https://class-component.vuejs.org/guide/class-component.html#hooks) | [`Lifecycle Hooks`](https://vuejs.org/api/options-lifecycle.html) are pretty much the same |
| [`Mixins`](https://class-component.vuejs.org/guide/extend-and-mixins.html#extend-and-mixins) | [`mixins`](https://v2.vuejs.org/v2/guide/mixins.html?redirect=true) are deprecated in Vue 3, but we'll keep them for now |
| Class [`getters and setters`](https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters) | [Computed](https://vuejs.org/api/options-state.html#computed) property declaration |

As we can see from the table above, we're actually getting quite a few new features with this refactor, thanks to Vue [`2.7`](https://github.com/vuejs/vue/blob/main/CHANGELOG.md#270-2022-07-01) back porting some of its feature from Vue 3 (with some limitations and caveats).

In addition to these functionalities the generated component **should have the same (if not better) type checking at compile time**.

## The execution

There are probably a lot of ways to do this (some of which may have been better that our approach), but we chose a compiler style approach to solve this issue, which included the following steps:

1. Reading the Vue SFC class based typescript `<script>` content;
2. Generating the [Abstract Syntax Tree (AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree) and [Symbol Table](https://en.wikipedia.org/wiki/Symbol_table) for easier manipulation
3. Creating a new AST following the Options API syntax with the generated [Symbol Table](https://en.wikipedia.org/wiki/Symbol_table)
4. Generating the code from the new AST
5. Writing this code into a new Vue SFC leaving the `<template>` and `<style>` blocks untouched

### Compilers 101

To actually understand what is going on, we'll have to briefly explain what are the generic compilation steps of a general purpose programming language. The diagram bellow should give you an idea, but we'll go over it together.

<dynamic-image
    filename="articles/the-making-of-decorators-to-options-api/compilation-steps.png"
    caption="Generic compilation steps and data structures"
    no-shadow ></dynamic-image>

Lets take the following TypeScript code as an example (as stupid as it may look) for our explanation.

```ts
function isEven(num: number): boolean {
    const notUsed = 123
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}
```


#### Compilation Steps

1. **Lexical Analysis:**
    - Analyze tokens in the source code, usually done with the help of [regular expressions](https://en.wikipedia.org/wiki/Regular_expression)
    - Think of this step as the language's ABCs
    - Makes sure there is no unwanted content in the source code, for example: chinese characters (outside a string) in `.ts` file
    - Produces tokens which feeds into the next step
```ts
function isEven(num: number): boolean {
    学中文 // <-- ❌ LEXICAL ERROR: chinese characters are not part of TypeScript's Lexicon
    const notUsed = 123
    if (num % 2 === 0) {
        return true
        🍌 // <-- ❌ LEXICAL ERROR: neither are emojis
    } else {
        return false
    }
}
```
2. **Syntax Analysis:**
    - Analyzes the tokens and their order with each other to make sure that the source code is syntactically correct
    - Examples: variable, function and class declarations, conditional statements, etc. So an `if` statement without `()` right after is a syntactical error
    - Produces an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) with feeds into the next step
```ts
function isEven(num: number): boolean {
    const notUsed = 123
    if num % 2 === 0 { // <-- ❌ SYNTAX ERROR: expected "(" but got ""
        return true
    } else
        return false
    } 
} // <-- ❌ SYNTAX ERROR: extra "}" detected
```
3. **Semantic Analysis:**
    - Analyzes the AST and makes sure that the code "makes sense"
    - Example: if a variable or function is used but not declared, there's a semantical error
    - Produces a [symbol table](https://en.wikipedia.org/wiki/Symbol_table) during the analysis for the next step
```ts
function isEven(num: number): boolean {
    const notUsed = 123
    if (num % 2 === 0) {
        return true
    } else {
        return 'false' // <-- ❌ SEMANTIC ERROR: expected type "boolean" but got type "string"
    }
}
```
4. **Code Generation:**
    - Given the AST and Symbol Table we are now able to generate the wanted code for each node
```js
"use strict";
function isEven(num) {
    const notUsed = 123;
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
```
5. **Code Optimization:**
    - This step is not necessarily done after the code generation, it can be done before or during
    - Takes the AST and Symbol Table and optimizes the code
    - Example: remove unreachable/dead code, remove's unused declarations (variables, functions, imports, ...), removes unnecessary tokens
```js
"use strict";
function isEven(num) {
    return num % 2 === 0
}
```

#### Data Structures

- **Tokens:**
    - A set of tokens that are part of the language's lexicon
```
- FUNCTION_KEYWORD "function"
- IDENTIFIER "isEven"
- LEFT_PAREN "("
- IDENTIFIER "num"
- COLON ":"
- IDENTIFIER "number"
- RIGHT_PAREN ")"
- LEFT_BRACKET "{"
- ...
```
- **Abstract Syntax Tree (AST):**
    - The AST places all these tokens into an hierarchical tree data structure, which makes it possible to understand scopes and logic
    - There are algorithms to simplify and detect ways to optimize the AST, but lets keep it simple for now
    <dynamic-image
        filename="articles/the-making-of-decorators-to-options-api/example-ast.png"
        caption="Simplified Abstract Syntax Tree of example code"
        no-shadow ></dynamic-image>

- **Symbol Table:**
    - Symbol tables are simply data structures which contain information about the declared functions, classes, methods, variables and so on
    - Each code block as its owns scope, so its only natural for each block to have its own symbol table. In our code example, we would have symbol tables for:
        - the entire file, which would contain `isEven` function signature
        - the `isEven` function scope, which would contain the `notUsed` variable declaration
        - and then one for the `if` block and another for the `else` block

### TypeScript AST

In our explanation of the above example, we've already got a glimpse of a very simple typescript AST. Thankfully, there is an online [TypeScript AST Viewer](https://ts-ast-viewer.com/#) which allows us to visualize the tree for user input code. This was a great source of information during the development of the project.

Now let's take a look at an example Vue SFC `<script>` content using a Class-based syntax with decorators(✨ You can view the same example [here](https://ts-ast-viewer.com/#code/JYWwDg9gTgLgBAbzgYQuCA7AphmAaOABSgjAIDUBXLAgJSwDMCBREYfOAdQEMYBjABZwAvnAYkQcAOQA3agFowJMFlgBPeQBMsfaL2hSAUKEiw4AOSwBnGFk2p02XGInSAdAHpLNuw8hOYNzksI2NcVQZuPiw4AFk1AElwqEjoxEM4TLgQNWJSVRg1AC44GyhgDABzQ2FDQw8POAEYGDArIobK9gFKACM3XRAPAGtuaEoMAGYAFkmPYMVlAo1tXSh9KEMAAT9MHBgACgQMrMH-ffb0rOuLa1t7NHPcPBPM4RfhAEpDLAAPU3g2kilAANvA+CDuFYrHBmL9uOAQVhdgE4H9bBhNDCqDFjtcGnB6AwrK84FsiQcpDkACLAGRSb7XKBYbiaTAgtTZNS0mQAQhKAAkACqxAAyPOYSJA+zq+MaeTapK2CqOcEKKhKACEIBAkdwMAQgdxQTASjAoNQRIysmA+iDgHw4MzWezOUaTdrdSyMPy4L0dXqMLKssrlKr1VgSgBlc0VSqGxjGsElKSkGDATBwACMUitpNtvXtjudbIwHLg7rBCt9qbA6czObgAB9pGmMxg4AAmULXUOkcNqDVwGPlKoEZkAR0owGZmjNFpiX3zdodTpZpfLk+ns5HcerJTKceDmT7YAHQ93Y7XU5ndhKkRBVkX1syBaLa5dZc5GAgMHoN53WMqgVAB+A8gOqJUVSQCMSgAeV6AArHR4CXa431XEtXTgCAkJQ0CSniJJbBSKIsGPOACU0XhuFJGkaLg7A4AAXmkaIMChIx0PKGReBiHJiDpPjqRoljpBAaAYhsSgGAYHssgJHh+AEJUlMESl6JgbhGJCAgkFAaVNGAPj52oBMsDAUzn1JTB4hErSdIObAAHdyG4EFwNHeMcJBTQ3I8w8qk+K4bkyXQMCsL03BBCBKgOAADQR9UqOwXDQOAABIEF1Pz3NEGAIEyhAXP84ReXil8RAoglWHYEle1qw4qQ0LAZH2BlSSwNgYHiZg2ucA5PhKGQIGATREFqJVGo0lr+pgeRnO6RRuDUGLWWW9YQA664uvYXq5s4bpCBWtbNGOza4CcygQBKDBrt6VQhrgEaxpC0KYAEYArDcTTtKY1jU0oc1uDgdjuC4rJJoa7qZvkVr9gWpawBOiB1uZGBKCgDBtqyXaerUPr9kOj7jtW1HNHoDGscuu6brgWmHqgJ7AsqN6bg+r6ftyHjhNEgGJOZbJJNKDHZIh0L0cxjsOe+gSedsezaOuKGFMaM4gbsUkUvgX6dIAVTAFQoD4KEYkGtmmSwKnpc+2XuQY7A3AKg2jeQU3BtJFXMgJaUPogLFSRiyoozQK3PqqS7It98PKhKfU1Cel7xrxULQcwSKkWi2KDijsO40qr2KwgWJeAEA5uFu+7VAIXpK5ARmnoZ1QLaySXqZBgBqP1PYotkQ+juNiYEClgpT97ba5nk3FZTRCdwUUvoxVRKQhB1hikAhzeYgA+NUJ6D-u86qA4ZbcNkS4+g4szwLNPjvnvOu6gBBEEQSFAQsHfuMYUG4bRuT0k1xT5432vsD2qc96cxAQTA6R0UasnOgiA4nZKpAIntAueMAh6k1OpTKWyCC41CAA) ✨)

<dynamic-image
    filename="articles/the-making-of-decorators-to-options-api/typescript-ast-viewer.png"
    caption="TypeScript AST Viewer of a Vue SFC using Class-based syntax"
    no-shadow ></dynamic-image>

This may seem a lot to swallow (and it kind of is if this is your first time learning about compilers), but if you take some time, you'll see that it also makes a lot of sense.

Thankfully, we don't have to perform this analysis by hand, as the [original TypeScript project](https://github.com/Microsoft/TypeScript) allows us to do this ourselves. However, there are some open source packages which build on top of the TypeScript API and already provide some tools for easier compiling. All in all, we've ended up using [`ts-morph`](https://ts-morph.com/).

If we look back the [compilation steps diagram](#fig-compilation-steps), we've already took care of step 1 and 2. Hurray for us 🎉.

Now let's take a look at which nodes we want to work with, and what they mean in the context of a Vue SFC.

| AST Node(s)  | Vue SFC Meaning |
| ------------ | --------------- |
| `ClassDeclaration` with `'@Component' Decorator` | Component definition with child components |
| `ClassDeclaration` with `'mixin' CallExpression` in `HeritageClause` | Mixin declaration |
| `PropertyDeclaration` with `'@Ref' Decorator` | Ref declaration |
| `PropertyDeclaration` with `'@Prop' Decorator` | Prop declaration |
| `PropertyDeclaration` without any `Decorator` child node | Data declaration |
| `MethodDeclaration` with `'@Watch' Decorator` | Watch method declaration |
| `MethodDeclaration` with `'@Emit' Decorator` | Emit method declaration |
| `GetAccessor` | Computed property declaration |

Now, we just need a way to transverse the AST and look for the nodes that match Vue's Component declaration, data, props, methods, etc. Thankfully, there's a design pattern that's perfect for this task. 

### Visitor Design Pattern to the rescue

The [visitor design pattern](https://refactoring.guru/design-patterns/visitor) is a behavioral design pattern which allows us to "visit" an iterable data structure (in this case a tree) and perform some operation when visiting specific types of nodes. Since our project took a more [functional style](https://en.wikipedia.org/wiki/Functional_programming), we've defined our visitors as functions, which have the following type:

```ts
/**
 * @param {Node} node AST node to be visited
 * @param {SymbolTable} symbolTable symbol table before visiting the node
 * @returns {SymbolTable} symbol table after visiting the node
 */
export type VisitorFunction = (node: Node, symbolTable: SymbolTable) => SymbolTable
```

Basically, a visitor function receives a [`Node`](https://github.com/microsoft/TypeScript/blob/main/src/compiler/types.ts#L909) and a [`SymbolTable`](#symbol-table), and returns another `SymbolTable` which is basically a copy of the one received as argument with some update given the visited `Node`. For each AST Node we're looking for, we've implemented a visitor function that returns an updated symbol table, which you can take a look at on the [`compiler/visitors.ts`](https://gitlab.com/infraspeak/pet-projects/vue-class-decorators-to-options-api/-/blob/main/src/compiler/visitors.ts) file.

With this [`VisitorFunction`](#visitor-function-type) type we can easily visit the entire tree by [`reducing`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) our visitors with each `Node` in our AST and easily build our Symbol Table.

```ts
export function buildSymbolTable(sourceFile: SourceFile, visitors: VisitorFunction[]): SymbolTable {
    return visitors.reduce<SymbolTable>(
        (table: SymbolTable, visitor: VisitorFunction): SymbolTable =>
            sourceFile.forEachDescendantAsArray().reduce<SymbolTable>(
                (_table, node) => visitor(node, _table),
                table
            ),
        createEmptySymbolTable()
    )
}
```

This may look complicated, but stay with me for a while:

1. `visitors.reduce<SymbolTable>([callback], [initial-value])` is iterating over our visitors with an initially empty Symbol table, and returns the final filled symbol table;
2. `[callback]` is a function which basically receives a Symbol Table and the current visitor, returning the symbol table after the visitor finished visiting the tree. It then moves on to the next visitor, with the symbol table in the state the previous visitor left it. It performs the following logic:
    1. `sourceFile.forEachDescendantAsArray().reduce<SymbolTable>([callback], [initial-value])` is iterating over the AST's nodes with a symbol table in some type of state. In the end, it will return a symbol table after each node has been visited;
    2. `[callback]` is a function which receives a Symbol Table and the current AST node, it then visits that node and returns the updated Symbol Table. It then moves on to the next AST Node, with the symbol table in the state the previous node visit left it at;
    3. `[initial-value]` is the current symbol table state after each visitor is done visiting the tree (initially empty);
2. `[initial-value]` is an empty [Symbol Table](#symbol-table);

Welcome to the world of functional programming, simplicity and a little bit of magic, but also some mind fuckery for the unsuspecting. You can learn more about functional programming and its use with TypeScript in [my presentation for the December 2022 Engineering Days](https://docs.google.com/presentation/d/1TwKn7hSFA7SMJG7cCPdid_0Ij95c3GgCKirR1DIc9yo/edit?usp=sharing).

**📝 Sidenote:** Learn more about `SourceFile`s [here](https://ts-morph.com/details/source-files)!

### Symbol Table

We have yet to define our Symbol Table, let's take a look at that now. Thankfully, we're only interested in the Component `Class`' symbol table, so we've defined types for each Vue Component property (i.e `props`, `computed`, `method`, etc. Which you can have a look at [here](https://gitlab.com/infraspeak/pet-projects/vue-class-decorators-to-options-api/-/tree/main/src/compiler/structures)) and placed it all together on our symbol table.

Our symbol table is very simple, and only contains a reference to the component we're working with as well as an array for each Vue SFC property. You take a more detailed look [here](https://gitlab.com/infraspeak/pet-projects/vue-class-decorators-to-options-api/-/blob/main/src/compiler/symbol-table.ts).

```ts
export interface SymbolTable {
  component?: Component,
  data: Data[]
  refs: Ref[]
  props: Prop[]
  hooks: Hook[]
  emits: Emit[]
  watch: Watch[]
  methods: Method[]
  getters: Computed[]
  mixins: Mixin[]
}
```

### Code Generation

Now that we have our Symbol Table populated with component data, we can generate whatever code we want. Luckily, [`ts-morph`](https://ts-morph.com/) comes bundled with [`code-block-writer`](https://ts-morph.com/manipulation/code-writer) which already does most of the heavy lifting for us.

So all we have to do is generate the code in the Options API Syntax for each symbol table entry. This part is fairly tedious, but you can take a look at [`compiler/code-generator.ts`](https://gitlab.com/infraspeak/pet-projects/vue-class-decorators-to-options-api/-/blob/main/src/compiler/code-generator.ts) if you're interested.

#### Linting the Generated Code

Even though [`ts-morph`](https://ts-morph.com/) and [`code-block-writer`](https://ts-morph.com/manipulation/code-writer) allow use to write code and format it, there are some specific or even custom code styling rules which are enforced only by [`ESLint`](https://eslint.org/). Each node project (like `web-core-client`) may have its own rules and instance of ESLint, therefore it was necessary to include these extra formatting rules to avoid as little human intervention as possible.

Thankfully, ESLint provides a [NodeJS API](https://eslint.org/docs/latest/integrate/nodejs-api#-eslintlinttextcode-options), which allows our compiler to run eslint programmatically with a custom `.eslintrc.js` file and format the generated code in whatever style we want. Take a look at [`compiler/linter.ts`](https://gitlab.com/infraspeak/pet-projects/vue-class-decorators-to-options-api/-/blob/main/src/compiler/linter.ts) for more details.

### Code Optimization

There's not a lot we can do here, as it is out of scope for this project. Nonetheless, since we have access to the AST we could (at least in theory) type methods return types for example.

However, for the time being, not a lot of effort was put into this step.

### Running the Compiler as a CLI

Last but not least, we need to make the program run on the command line and accept a user-defined configuration. To make our life's easier, we've just used [commander.js](https://github.com/tj/commander.js/) to parse and verify CLI options. Options include:

- `-f: files`: (required) accept linux filepaths (globs also accepted) of Vue SFCs to "compile"
- `-l: linter`: path to custom `ESLint` config file
- `-v: verbose`: spit what's going on to the console

## The result

In the end, we were able to create a compiler/transpiler/thingy which can magically migrate our codebase in a time efficient way, requiring very little human intervention.

All in all, we're really happy with this project and can't wait to see how it affect our migration to Vue 3.

### VSCode Task

In order to increase developer experience (and also for the fun of it), there are instructions on the [project's README](https://gitlab.com/infraspeak/pet-projects/vue-class-decorators-to-options-api/-/blob/main/README.md) file to install it and configure a task on VSCode to automagically generate Option API Syntax Vue SFC from an opened Class-based Vue SFC.

<dynamic-image
    filename="articles/the-making-of-decorators-to-options-api/vs-code-task.gif"
    caption="Running decorators-to-options-api on VSCode"
    no-shadow ></dynamic-image>

### Limitations

This is all fine and dandy, but real world software usually has a few caveats (especially if 80% of the code developed was done in 4 days), here are the ones I've found so far:

- JSDOC is ignored during AST generation and therefore is lost on the generated component;
- Some of `ESLint` styles might not work at first (not sure why), therefore it is recommended to re-run the linter manually on generated files;
- Vue's Options API Syntax has a few caveats regarding type support, so please make sure everything is working before committing your changes;
