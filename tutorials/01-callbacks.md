# Tutorial 01 - Callbacks

## The Abstract

### Last Will and Testament

A *will* is a legal document that describes how a person wishes their property to be distributed after they die.

The author of a will is known as the *testator*. The person who carries out the instructions in the will is known as the *executor*.

The will is only executed in the event of the author's death, not a moment before. It's a detailed plan for a grim future.

### A Will in Software

Luckily, we don't have to die to tell the computer to execute a series of steps when a certain event takes place!

## The Technical

### Basic Callbacks

Sometimes you want to run some code when some *thing* happens. That thing is called... An *event*.

Inside a web browser, those events can be user interactions like clicks, hovers, scrolls, etc.

You've probably seen code like this before:

```javascript
const buttonElement = document.getElementById('button')

buttonElement.addEventListener('click', () => {
  console.log('buttonElement was clicked')
})
```

This code *binds* a *click event listener* to the `buttonElement`. Simply put, it says "when this button element is clicked, run this function".

The first argument `'click'` is the name of the event to listen for. The second argument `() => { ... }` is the function to run when the click event happens.

Since the second argument is a function, it could have also been written like this:

```javascript
const logClick = () => {
  console.log('buttonElement was clicked')
}

buttonElement.addEventListener('click', logClick)
```

`logClick` is known as a *callback function*.

It is called this because it is a piece of code that is passed to another piece of code that will "call back" to it at some point in the future. In this case, it will call back to it when the button is clicked.

### More Callbacks

You can register a callback function to execute after a certain amount of time has elapsed:

```javascript
setTimeout(() => {
  console.log('Hello, world!')
}, 1000)
```

`'Hello, world!'` will be shown on the console in the event that 1000 milliseconds have passed. Again, to put it simply, "in one second, run this function".

And again, since the first argument `() => {}` is a function, it could also be written like this:

```javascript
const greetWorld = () => {
  console.log('Hello, world!')
}

setTimeout(greetWorld, 1000)
```
