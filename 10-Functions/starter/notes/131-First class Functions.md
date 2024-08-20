JS is a language that has first-class functions, which in techincal terms, functions are so-called first-class citizens.

In practice, that means **functions are simply treated as values.**
**Functions are just another "type" of object in Javascript.**

## First-Class Functions
Since objects are values, functions are values too. Therefore, we are able to:
1. store functions in variables or object properties.
2. Pass functions as arguments to other functions(e.g. addEventlistener)
```
  const greet = () => console.log("hello")
  btnClose.addEventListner('click', greet)
```

3. Return a function from another function
4. Call methods on functions(Functions are objects)(There are array methods and also function methods)
```
counter.inc.bind(someOtherObject)
```

## Higher-order Functions
A function that receives another function as an argument, that returns a new function, or both
1. Function that receives another function
   ```
    const greet = () => console.log("hello")
    btnClose.addEventListner('click', greet)
   ```
We ususually called the function passed in the callback function, that is the callback function will be called later by the higher-order functions. In this case, addEventListner function will call the greet function later, as soon as the click event happens.

2. Function that returns new function
  ```
    function count() {
      let counter = 0

      return function() {
        counter ++
      }
    }

  ```

  Differences
  1. There are no first-class functions in practice; It is just a concept(All functions are values)
  2. There are higher-order functions in practice