# 01 - JavaScript Drum Kit

### Topics covered
1. Adding key event listener
2. Playing audio
3. Listening to transition and event

### Notes
* [Where to get all the key codes](https://keycode.info/)

* The **[data-\*][1]** attribute allows to add no standard attribute

* Because the same `data-key` attribute is shared between a `div.key` and an `audio` tag, these 2 elements are binds together.

* `audio` is an interesting HTML tag with its own API that is [well supported](https://caniuse.com/?search=audio)

* When using `document.querySelectorAll()` as in the below example, we get a **NodeList** (not an array)
```
const keys = document.querySelectorAll('.key')
```
* Definition by Wes Bos (17min16sec) of `this`:

> `this` is always equal to the  whatever got called against it "

So, in the example below, in the removeTransition function, when `this` is used, it's equal to `key`
```
function removeTransition(e) {
  (...)
  this.classList.remove('playing);
}
(...)
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
```
* The `transitionend` event is called for all the properties that are transformed, in this example, there are more than what we need.  This is why we filtered out the unecessary ones
```
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  (...)
}
```

### Decrepencies between the video and the finished html in wes bos repositery

**Old**
```
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
```
**New**
```
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}
```



[1]:https://developer.mozilla.org/en/docs/Web/Guide/HTML/Using_data_attributes
