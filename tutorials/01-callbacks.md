# Tutorial 01 - Callbacks

## Events

Sometimes you want to run some code when some *thing* happens. That thing is called an *event*.

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
