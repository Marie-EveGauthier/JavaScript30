### 16 - CSS Text Shadow Mouse Mose Effect

### Topics covered
- `contenteditable`


### contenteditable
`contenteditable` is an attribute indicating if the element should be editable by the user.[1]


[1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable


### offset

- `offsetX` or `offsetY` give us the position of the cursor

BUT, if there are some nested elements inside, you will need to do a little bit of maths to deal with, so the cursor value won't reset to 0 for the nested element

- the `offsetLeft` read-only property returns the number of pixels that the upper left corner of the current element is offset to the left within the `offsetParent node`.

- the `offsetTop` property read-only property returns the distance of the current element relative to the top of the `offsetParent node`.
