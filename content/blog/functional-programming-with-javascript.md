---
title: "Functional Programming with JavaScript"
description: "Do you stress about how to organize and structure your code? How should you store your variables? Should your arguments be passed by value or reference? How should your functions present their results? Should your program hold an internal state? Using functional programming, all your questions will be answered."
tags:
 - "Technical"
image: "articles/functional-programming-with-javascript/abacus.jpg"
author: "Gonçalo Marantes"
publishedAt: "2021-10-25"
time: "15 minutes"
---

## Paradigm... what's that?

In a nutshell, a programming paradigm is a way to classify a programming language based on its features, such as syntax, grammar and execution model. There are many paradigms out there, some of which are even subsets of each other, **so don't think about a paradigm as something mutually exclusive**. For example, Python is both imperative, object-oriented, procedural and functional.

There has always been a lot of buzz regarding Object-Oriented Programming. In fact many of the code examples we see online for newbie programmers is the cliché `Animal class` that is inherited by `Dog` and `Cat` classes.

## Functional vs Object-oriented

The first question we need an answer to is: "Is OOP so popular due to its paradigm exclusive features?", it might look like at first glance, but in reality that is not the case. Let's take a look at main OOP features and we can achieve the same thing with functional programming.

### Information hiding (encapsulation)

We have learnt to hide information inside our classes, in OOP we do it using `access control` keywords, that is `private`, `public`, and so on. We then only allow the manipulation of these values using `getters` and `setters`.

```jsx
class MyClass {
	private privateAttribute
	public publicAttribute

	public getPrivateAttribute() { return this.privateAttribute }
	public setPrivateAttribute(attr) { this.privateAttribute = attr }
}
```

Can we get a similar behavior in functional programming? Yes, as long as the language your using has a module system. So the information you want to be public can be exported from the module and imported from other modules. Everything else that is not exported can only be used inside the module.

```jsx
let privateVar
let publicVar

const getPrivateAttribure = () => privateVar
const setPrivateAttribure = (attr) => this.publicVar = attr

export { publicVar, getPrivateAttribure, setPrivateAttribure }
```

### Inheritance

You can make the case that inheritance is exclusive to OOP, and you'd be 100%. However, on must ask "Is inheritance really that big of a feature? Is it really a game changer?". In order to answer these questions I'll just leave you with this paragraph from Wikipedia.

> *Composition over inheritance (or composite reuse principle) in object-oriented programming (OOP) is the principle that classes should achieve polymorphic behavior and code reuse by their composition (by containing instances of other classes that implement the desired functionality) rather than inheritance from a base or parent class. This is an often-stated principle of OOP, such as in the influential book Design Patterns (1994). - in Wikipedia (*[https://en.wikipedia.org/wiki/Composition_over_inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance))

So as you can see, one of the most influential books in Software Engineering promotes the use of composition over inheritance. And composition is easily replicated in any programming paradigm. **Without inheritance, objects and methods are just sugar coated structs and procedures.**

## What makes functional programming functional?

After bashing over on the most popular programming paradigms, let's understand the main features of functional programming.

### Do everything with functions

This might sound like a pleonasm, but it is important to understand that **every input produces an output**. Hence, it is important to think about the flow of data, that is the inputs and outputs instead of thinking about objects and how they interact and which state they are in.

```jsx
// non functional (imperative style)
const name = 'Gonçalo'
const greeting = 'Hello'
console.log(`${gretting} ${name}`)
```

```jsx
// functional
const buildGreeting = (name) => `Hello ${name}`
console.log(buildGreeting('Gonçalo'))
```

### No side effects

What exactly is a side effect? It basically is anything that a function might do that isn't computing its outputs from the inputs and returning that output. So a function that uses or updates anything out of its scope is changing the program state and therefore it might be considered as "not pure". Here's the following example.

```jsx
// not pure function
// global variable (state)
const name = 'Gonçalo'
const greet = () => {
  // printing to the console is also considered a "side effect"
  console.log(`Hello ${name}`)
}
```

```jsx
// pure function
const greet = (name) => `Hello ${name}`
greet('Gonçalo')
```

The goal here is to make every function completely independent. And not relying on program state offers a set of advantages that we will find more about soon enough!

### Higher order functions

This means functions that can take as input other functions, or even a function that can return a function as its output. And by using this, we can achieve behavior that is quite similar to objects.

```jsx
// returns function
const createComplement = (complement) =>
  (name) => `${name} is ${complement}`

const cool = createComplement('cool')
const nice = createComplement('nice')

cool('Gonçalo') // Gonçalo is cool
nice('Gonçalo') // Gonçalo is nice
```

```jsx
/**
 * reducer -> function
 * initial -> initial value
 *   x -> first element of the array
 *   arr -> rest of array to reduce
 */
const reduce = (reducer, initial, [x, ...arr]) =>
  x === undefined
    // return initial if array is empty
    ? initial
    // reduce first element and continue reducer with the rest of the array
    : reduce(reducer, reducer(initial, x), arr)

reduce((acc, curr) => acc + curr, 0, [1,2,3]) // 6
```

### Immutable Data - "Don't update, create!"

Imagine you want to iterate over an array, and perform some operation on its values, such as filtering values. One of the most important aspects of functional programming is that it is completely stateless. Hence, if you want to update this array you simply need to create a new one that is already filtered. Here is an example:

```jsx
const arr = ['Gonçalo', 'Gary', 'Mike', 'Guy', 'Peter', 'Gustaff']
const filteredArr = arr.filter((name) => name.startsWith('G'))
```

By creating new variables instead of updating them, we can be sure that our variables have the same values throughout the whole program execution. **This contributes to the predictability of our programs.** And if our programs are predictable than they are easier to analyze and debug.

### Recursion over iteration

Now let's imagine that we want to reverse the order of an array. It is easier to think about iteration and loops, but if you look at the code example below, you can clearly understand that you code is much more compact.

```jsx
// imperative (loops)
const reverse = (arr) => {
  let  clone = [...arr]
  for (let i = 0; i < clone.length / 2; i++) {
    switchVals(clone, i, clone.lenght - i - 1) // random function that switches values
  }
  return clone
}

// declarative (recursion)
const reverse = ([x, ...arr]) => // ES6 destructuring
  x != undefined ? [...reverse(arr), x] : []
```

Keep in mind that iterations have state (`i` variable keeps changing), whereas r**ecursion is static and predictable (the same inputs produce the same outputs).**

You might ask yourself "But doesn't that increase space complexity in our program?", and you're right! That is why **Garbage Collection** and **Persistent Data Structures** are important concepts to make functional programming more effective. These are topics that I will write about in the future.

## What cool features does Functional Programming hold?

### Function Composition

We've probably already heard of Function Composition sometime when studying mathematics. Basically, it is an operation that takes two functions *f* and *g* and produces a function *h* such that *h(x) = g(f(x)) =* (*g* ∘ *f* )(*x*).

Function chaining achieves the same output, however the syntax is somewhat different. The example bellow illustrates these two concepts:

```jsx
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9]

// chaining - obj.f().g().h()
arr
  .map(x => x * 2) // [2, 4, 6, 8, 10, ..., 18]
  .filter(x => x % 3 === 0) // [6, 12, 18]
  .reduce((x, y) => x + y, 0) // 36

// function composition - pipe(f,g,h)(obj)
// can be considered as better because it
// separates concerns and places functions
// in the center
// (remember the decorator design pattern?)
const doubled = x => x * 2
const threeDivisible = x => x % 3 === 0
const add = (x, y) => x + y

const manipulate = pipe(
  map(doubled),
  filter(threeDivisible),
  reduce(add, 0)
)

manipulate(arr) // 36
```

### Remove unused calls

In a functional programming style, it is easy to follow the flow of data. Hence, it is simple to see which variables or functions are never used. In the following example, we understand that `z` is never used after its creation. So the compiler/transpiler should be able to understand that `f(y)` does not need to be called and can be removed.

```jsx
const x = f(4)
const y = f(x)
const z = f(y) // z is never used, so f(y) may not be executed
console.log(y)
```

### Memoization (Cache)

We've seen before that functions are predictable, that is, the same input provides the same output. That said, in order to speed things up we can perform function memoization. Memoization is just a fancy term for caching. A simple implementation consists of mapping inputs to outputs, and when an input is used for the first time, the function is executed and its return value is stored. Whenever the same function is called with the same input values, the stored output is returned instead.

```jsx
function add(a,b) { return a + b }
const memoAdd = memoize(add)
// memoize() does not exist in plain JS,
// but some libraries implement memoization

memoAdd(2, 3) // -> 5, add called
memoAdd(1, 3) // -> 4, add called
memoAdd(2, 3) // -> 5, add NOT called
```

### Parallelization

Given that everything is executed within functions, and that every function is completely independent then it is easy to parallelize function execution. So functions can execute simultaneously increasing program performance. However, this is not really possible with JavaScript, but the concept still stands for other programming languages.

```jsx
add(fibo(7), sum(1, 100))
// run in parallel
// not really a thing in JS
```

### Testing

No setup required, each function is completely independent and easily tested on its own! It is usually easy to perform dependency injection when using functional programming.

## If Functional Programming is so cool, why is Object-Oriented the "norm"?

Every programmer knows what a class is, but what they don't know is why they even learnt that in the first place! Are classes really the best way to handle most common scenarios? To understand how OOP got so popular in the first place, I recommend you take a look at [this talk](https://www.youtube.com/watch?v=QyJZzq0v7Z4) by Richard Feldman.

## Conclusion

To sum up, don't take my take on functional programming as a silver bullet to solve all your problems. This is just one of many paradigms you can follow, it all boils down to your specific application, the development team and the programming language you end up choosing.

Feel free to tweet at me your opinion on functional programming.
