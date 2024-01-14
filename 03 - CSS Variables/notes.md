# 03 - CSS Variables

### Topics covered
- Defining and using `css variables`
<br>
- Event handler: `change` and `mousemove`
<br>
- Custom data attributes (reusing a previously learned concept) and [`dataset`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

### Notes

* `--`  is the standard in css to use a variable
```
  :root {
    --base: green;
  }

  div {
    color: var(--base)
  }
```
* Array vs NodeList
  * `.querySelector()` or `.querySelectorAll()` returns a nodeList, that is looking as an array but it's not an array.
  * array has **all** the methods natively
  * nodelist has only some of the methods, among them `forEach`
  * nodelist can be transform in an array
      ```
        const inputs = document.querySelectorAll('input');

        // This method creates a new array from an existing one, or from an array-like object
        const inputsArr1 = Array.from(inputs);

        // ES6 spread operator
        const inputsArr2 = [...inputs];
      ```


* `.dataset` gives you an object with the list of pair personalized attribute(what's coming after the dash) and value
* `CSS variables` can be used at a lowest scope than root (document)

### How to

1. Define the **CSS variables**

```
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}
```
2. Use the variable
```
  img {
    padding: var(--spacing);
  }
```
