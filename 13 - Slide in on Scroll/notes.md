### 13 - Slide in on Scroll

### Topics covered
- `debounce`
-  `window.scrollY`
-  `window.innerHeight`
-  `offsetTop`

### debounce
`debounce` function limits the rate at which a function can fire. It ensures that a given task doesn't fire so often that it breaks browser performance.

### How to detect how much is scrolled

`window.scrollY` and `element.scrollTop` are both properties used to determine the vertical scroll position of a webpage, but they have different scopes and contexts:

- `window.scrollY`: It returns the **number of pixels** that the document has already **been scrolled vertically**. It represents the scroll position **relative to the top of the entire document**, regardless of where the element is located on the page. This property is read-only.

- `element.scrollTop`: It's specific to an individual HTML element, such as a `<div>` or `<iframe>`. It returns **the number of pixels** that the content of the element has been scrolled vertically. It represents the scroll position **relative to the top of the element's content area**.


#### And how to get how many pixels has been scrolled vertically when something is _appearing_ at the bottom of the page ?
```
window.scrollY + window.innerHeight
```

### offsetTop
It returns the distance between the top edge of an element and the top edge of its offset parent element.

In simpler terms, it tells you **how far down an element is from the top of its closest positioned ancestor element**.
