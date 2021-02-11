---
title: "Logical Array Operations with JavaScript ES6"
description: "Are you tired of doing nested for loops and if statements? Surely there must be a better, more readable and efficient way for array manipulation... Worry not, I will tell you the secrets of writing beautiful code. So open up your terminals, get your hacker groove on, it's time to code!"
tags:
 - "Technical"
image: "articles/logical-array-operations-with-javascript-es6/billiard.jpg"
author: "Gonçalo Marantes"
publishedAt: "2021-02-11"
time: "5 minutes"
---

## What is a logical operation?

If you have no idea what [Relational Algebra](https://en.wikipedia.org/wiki/Relational_algebra) or [Set Theory](https://en.wikipedia.org/wiki/Set_theory) is, have no fear, those are just big fancy expressions to make you feel dumb... Or smart depending on which side of the spectrum you reside. 🤓

Either way, logical operations between two sets are just comparisons between the elements of those sets. The result varies on the operation. So you may ask: How many operations are there? Well, I'm glad you asked. The most common operations are:

- Intersection, also known as `AND`
- Union, also known as `OR`
- Difference
- Symmetric Difference

## Let's get to coding

First let's create two arrays with some random elements

```jsx
const leftFruit = ['🍇', '🍑', '🍉', '🍊', '🍍', '🍓']
const rightFruit = ['🍌', '🍒', '🍐', '🍍', '🍓']
```

Now, we can visualize this a bit better if we use a [Venn diagram](https://en.wikipedia.org/wiki/Venn_diagram).

<dynamic-image filename="articles/logical-array-operations-with-javascript-es6/original.png" caption="Venn diagrams are awesome"></dynamic-image>

We can already start to see some neat stuff we might want to do with these elements.

### Intersection

<dynamic-image filename="articles/logical-array-operations-with-javascript-es6/intersection.png" caption="Intersection"></dynamic-image>

```jsx
const intersection = leftFruit.filter(x => rightFruit.includes(x))
```

The [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method **creates a new array** with all elements that pass the test provided as a function callback. So for example:

```jsx
const greaterThan3 = [1, 2, 3, 4, 5, 6, 7, 8].filter(num => num > 3)
console.log(greaterThan3) // [4, 5, 6, 7, 8]
```

Finally, the [`includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) method simply returns <code>true</code> if the value provided as argument is part of the array. So going back to our `greaterThan3` array:

```jsx
console.log(greaterThan3) // [4, 5, 6, 7, 8]
console.log(greaterThan3.includes(5)) // true
console.log(greaterThan3.includes(2)) // false
```

### Union

<dynamic-image filename="articles/logical-array-operations-with-javascript-es6/union.png" caption="Union"></dynamic-image>

```jsx
// does not work (causes duplicates)
const union = [...leftFruit, ...rightFruit]s
```

This one is a bit tricky, because we don't want any duplicate elements in our resulting array. That's where the [Set Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) comes in. A value in a Set instance can only occur once, so it is unique.

So, we can easily concatenate our two arrays either by using the sexy [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) or the [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) method.

```jsx
// use set :)
const union = [...new Set([...leftFruit, ...rightFruit])]
```

### Difference

<dynamic-image filename="articles/logical-array-operations-with-javascript-es6/difference.png" caption="Difference"></dynamic-image>

```jsx
const difference = leftFruit.filter(x => !rightFruit.includes(x))
```

### Symmetric Difference

<dynamic-image filename="articles/logical-array-operations-with-javascript-es6/symmetric.png" caption="Symmetric Difference"></dynamic-image>

```jsx
const leftDifference = leftFruit.filter(x => !rightFruit.includes(x))
const rightDifference = rightFruit.filter(x => !leftFruit.includes(x))

const symmetricDifference = [...leftDifference, ...rightDifference]
```

## Final Regards

I know there are quite a few more operations we can perform using arrays and sets. But for know having these code snippets saved somewhere as saved me a lot of wasted time looking for a good solution to my problems.

Do you have any other way of solving these problems? Don't hesitate to contact me! 😎