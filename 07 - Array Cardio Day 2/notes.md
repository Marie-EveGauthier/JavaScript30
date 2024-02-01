# 07 - Array Cardio Day 2

### Topics covered
Array methods: `.every()` `.some()` `.find()` `.findIndex()`

### Notes


#### .find vs .findIndex vs .indexOf
This 3 methods are similar and I was confuse in the last exercices (by the last 2)

- [`.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
-> returns the **first** element in the provided array that satisfies the provided testing function.
-> If **no** values satisfy the testing function, `undefined` is returned.
```
find(callbackFn)
```

- [`.findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
-> returns the **index** of the first element in the provided array that satisfies the provided testing function.
-> If **no** element satisfy the testing function, `-1` is returned.
```
findIndex(callbackFn)


- [`.indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
-> returns the **first index** at which a given element can be found in the array.
-> If it's **no** present, `-1` is returned.
```
indexOf(searchElement)
<!-- searchElement is the element to locate in the array -->
```

 Usually when working wiht array of objects (like in the exercise), we prefer `findIndex`
