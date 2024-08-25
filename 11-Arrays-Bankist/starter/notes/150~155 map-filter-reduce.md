## 3 Data Transformation Methods(Map Filter Reduce)

`Map` returns a new array containing the results of applying an operation on all original array elements.
`current * 2`

`Filter` returns a new array containing the array elements that passed a specific test condition
`current > 2`

`Reduce` boils("reduces") all array elements down to one single value(e.g. adding all elements together)
`acc + current`

Map vs forEach
The forEach method may cause side effects, but the map method is a pure function

What to know about Filter
1. The returned array can have fewer elements than the original array, while the returned array will always have the **same number** of elements as the original array(but the values of those elements may be transformed).
2. The callback function in the filter method should always return a boolean value (true or false). 
3. The filter method is a great way to remove (or "delete") an item from an array without causing any side effects.

What to know about Reduce
1. The accumulator is like a snowball that keeps accumalating the value that we ultimately want to return
2. The accumulator will be **the current result** of all the previous values
3. Don't forget the initial value as the second parameter

To calculate the average:
```  const averageDogsAdultAge = dogsAgesInAdult.reduce(
    (acc, age, _, arr) => acc + age / arr.length,
    0
  );```

Assume dogsAgesInAdult is [2, 4, 7].

On the first iteration:

acc = 0 + 2 / 3 (since arr.length is 3)
acc = 0.6667
On the second iteration:

acc = 0.6667 + 4 / 3
acc = 2.0
On the third iteration:

acc = 2.0 + 7 / 3
acc = 4.3333

(We are able to calculate the average immediately)