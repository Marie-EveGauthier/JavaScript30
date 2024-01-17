# 05 - Flex panel gallery images

### Topics covered
- `display: flex`
- event listener: click and transitionend

### Notes
- `Arrow functions` does not have a `this` of their own, only regular functions and global scope have `this` of their own.

```
 // ARROW function NOT working
const toggleOpen = () => {
  this.classList.toggle('open'); // this = undefined
}

// REGULAR function
function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
}
```
