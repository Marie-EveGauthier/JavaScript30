# 03 - CSS Variables

### Topics covered
Defining and using css variables, event handler, data-attribute (reusing a previously learned concept)

### Notes

* `--`  is the standard in css to use a variable
* Array vs NodeList
  * querySelectorAll() returns a NodeList, not an array.
  * array has **all** the methods natively
  * nodelist has only some of the methods, among them `forEach`
  * nodelist can be transform in an array with `Array.from()`
  * The Array.from() method creates a new array from an existing one, or from an array-like object (which is what a NodeList is).

* `.dataset` gives you an object with the list of pair personalized attribute(what's coming after the dash) and value
* `CSS varialbes` can be used at a lowest scope than root (document)

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
