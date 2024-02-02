### 10 - Hold Shift and Check Multiple Checkboxes

Let's review what I did in parallel with the solution proposed by Wes.

#### 1. Select the checkboxes and listen to know when they are checked

In other words, fetch all the `<input>` elements and `addEventListener`

**ME** :
```
const checkboxes = document.querySelectorAll('input[type="checkbox"]')

...

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', () => {
    const isChecked = checkboxes[i].checked
    console.log({ isChecked })
    console.log({ isShiftHeld })

    ...
  })
}
```

**WES**:
```
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
```

- Using `forEach` is cleaner than the `for loop`
- `click` also fire when we use keyboard

#### 2. Verify if the shift key is down

**ME**:
```
    function toggleShift(e) {
      console.log(e)
      if (e.keyCode === 16) {
        isShiftHeld = true
      } else {
        isShiftHeld = false
      }
    }


    window.addEventListener('keydown', toggleShift)
```
- I reused the logic that we saw in the first exercise to identify which key is pressed.
- The key code for _shift_ is _16_
- I declared the `let` variable (to be able to reassign) `isShiftHeld` and I assign it the value of true or false depending of the key code.
- At the end of each of the `loop`, I have to reassign the variable to be false, so that the next for can evaluate it

**WES**:
```
function handleCheck(e) {
  // Check if they had the shift key down
  ...
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    ...
  }

  lastChecked = this;
}
```
- Wes knew that the `keyboard event` has a read-only property that indicates if the `shift` key was pressed : `shiftKey`.
- This property returns a boolean (true if it's pressed, false if it's not)

#### 3. Verify if the checkbox is checked (not unchecked)

**ME**:
```
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', () => {
    const isChecked = checkboxes[i].checked
    ...
  })
}
```

**WES**:
```
function handleCheck(e) {
  // AND check that they are checking it

  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
   ...
}
```
- `this.checked` is enough
- Since Wes is using the `forEach` method to iterate over each of the node (aka the input), inside the `handleCheck` callback, `this` has the value of the element on which the eventListener was attached
_source: https://stackoverflow.com/questions/52016966/this-keyword-inside-addeventlistener-callback_

#### 5. Find the item in between the first element checked and the second one that also had the shift key pressed AND mark them as checked

**ME**:
```
for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener('change', () => {
        const isChecked = checkboxes[i].checked
        console.log({ isChecked })
        console.log({ isShiftHeld })


        if (first >= 0 && isShiftHeld) {
          console.log('index of previous item clicked ', first)
          console.log('currentIndex', i)

          if (first < i) {
            for (let j = first; j < i + 1; j++) {
              checkboxes[j].checked = true
            }
          } else {
            for (let j = i; j < first + 1; j++) {
              checkboxes[j].checked = true
            }

          }
        }

        if (isChecked) {
          first = i
        }

        isShiftHeld = false
      })
    }
```

**WES**:
```
let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
```

- Instead of using a `for loop` to iterate over the items that should be checked (as my solution), Wes determines which items are `inBetween` and he iterates over ALL the items and he changes the checked value to be true if the `inBetween` flag is also true

#### Alternative (and more complex and complete) way to solve this issue

See [the README](https://github.com/amelieyeh/JS30/blob/master/10-Hold%20Shift%20and%20Check%20Checkboxes/README.md) of this person who did the formation previously
