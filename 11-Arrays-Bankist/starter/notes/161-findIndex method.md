
First we find the index, then we do the deletion using the splice method.

```

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});


```

## findIndex vs indexOf
### `findIndex` as a Higher-Order Function
  
- **`findIndex`:** 
  - Takes a callback function as its argument.
  - This callback function is applied to each element in the array.
  - The `findIndex` method uses the result of this callback function to determine the index of the first element that satisfies the condition.
  
  ```javascript
  let numbers = [10, 20, 30, 40];

  let index = numbers.findIndex(function (num) {
    return num > 25;  // The callback function
  });

  console.log(index);  // Output: 2
  ```

  In this example, `findIndex` is a higher-order function because it takes the callback function `(num) => num > 25` as an argument.

### `indexOf` is Not a Higher-Order Function

- **`indexOf`:**
  - Does not take a function as an argument.
  - Instead, it takes a specific value to search for in the array.
  - It simply checks each element for equality with the given value and returns the index of the first match.
  
  ```javascript
  let fruits = ["apple", "banana", "orange"];

  let index = fruits.indexOf("banana");

  console.log(index);  // Output: 1
  ```

  In this case, `indexOf` is not a higher-order function because it does not involve any function as an argument; it just directly compares values.

### Summary
- **`findIndex`** is a higher-order function because it accepts a function (callback) as an argument.
- **`indexOf`** is not a higher-order function because it operates on values directly without involving another function.