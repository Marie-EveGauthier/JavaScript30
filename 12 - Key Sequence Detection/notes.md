### 12 - Key Sequence Detection

### Topics covered
- `keyup`
-  `array.push()`
-  `array.join()`
- `array.includes()`
- `array.splice()`

#### Konami Code
As explained by ChatGPT:

> The Konami Code is a cheat code that originated in the 1985 arcade game "Gradius" developed by Konami. It's a sequence of button presses that, when entered correctly, would grant the player various advantages such as extra lives, power-ups, or access to hidden features. The classic Konami Code is:

> **Up, Up, Down, Down, Left, Right, Left, Right, B, A.**
<br/>  ↑↑↓↓←→←→ba
<br/> It has become iconic in gaming culture and has been used in numerous Konami games as well as by other developers as an Easter egg or homage.

An example of Easter egg was mentioned in a CBC article: [The Bank of Canada just leveled up its gamer cred. To promote the release of the new $10 bill, they hid a special treat on the interactive site promoting the launch.](https://www.cbc.ca/2017/canada-s-new-10-bill-has-a-special-feature-and-only-the-konami-code-can-unlock-it-1.4065743)

#### `array.splice()` vs `array.slice()`

`Array.prototype.slice()`
<br/>
The slice() method of Array instances **returns a shallow copy** of a portion of an array into a new array object **selected from start to end** (end not included) where start and end represent the index of items in that array.
<br/>
_The original array will not be modified._
[MDN][1]

`Array.prototype.splice()`
The splice() method of Array instances **changes the contents** of an array by **removing** or **replacing ** existing elements and/or **adding** new elements in place.

The **return value** is : an array containing the deleted elements.

If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.
[MDN][2]

--

In short, these methods allow to "play" with array's content, defining a start or end.  BUT `slice` doesn't modify the original array while `splice` does.

As in this exercice, we don't need to keep the orginial array, instead we need to detect if the last combinaison of letters that has the same lenght of the secret code has also the same content.  This is why we use `splice`



[1]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

[2]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

#### How splice is used
`splice(start, deleteCount)`
```
const secretCode = 'joie'
let pressed = []

pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
```



`start` = -secretCode.length - 1
- Using a negative number => it counts back from the end of the array

`deleteCount` =  pressed.length - secretCode.length
