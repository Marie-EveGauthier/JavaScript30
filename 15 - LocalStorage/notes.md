### 15 - LocalStorage and Event Delegation

### Topics covered
- `localStorage`
- `submit` event handler and `e.preventDefault()`
- custom `checkbox` and using `data-index`


#### [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

It allows to make data persisitent in the browser

```
localStorage.getItem(key)
localStorage.setItem(key, value)
localStorage.removeItem(key)
```

The browser expects **string** as **value**. So we need to format the data we used as value => `JSON.stringify(value)`


#### [Submit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)

The `submit` event fires on the `form` itself.  The page will reload.  To avoid the redirection => `e.preventDefault()`


#### Custom checkboxes

```
// hide original boxes
.plates input {
  display: none;
}

.plates input + label:before {
  content: '⬜️';
  margin-right: 10px;
}

.plates input:checked + label:before {
  content: '🌮';
}
```


#### data-index

The `data-index` attribute allows to bind the position of the item in an array with the html element
```
<li>
  <input type='checkbox' data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
  <label for="item${i}">${plate.text}</label>
</li>

const el = evt.target
const index = el.dataset.index
items[index].done = !items[index].done

```

#### Event delegation
We can't listen for the click on an item (input) that is created after we listen for it.
So, we have to use something _higher_ that already existed

- parent element is responsible for its children
- inside the event handler, we have to check for the right element

```
  itemsList.addEventListener('click', toggleDone);
```

`itemsList` is the `ul` parent that will contains the `li`s children
```
function toggleDone(e) {
    if (!e.target.matches('input')) return;
}
```
It checks if it's the wanted child
