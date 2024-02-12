### 14 - Javascript Reference VS Copying

### String, Number and Boolean

- They are **primitive types** (as `null` and `undefined`)
- Defining a variable of these types by using another variable will create a **copy**
- Any change to one of these will have no repercussion for the other one.

```
  let age = 100,
  age2 = age;
  console.log(age === age2, age, age2);   // true, 100, 100
  age = 200;
  console.log(age === age2, age, age2);   // false, 200, 100
```


### Object and Array

- What is not a primitive type, is an **object type** (as `function`, `set`)
- These _objects_ are _copied_ by **reference**
- Modifiying the copy will also modify the original

```
let players = ['Wes', 'Sarah', 'Ryan', 'Lux'];
const team = players;

console.log(players, team) // (4) ['Wes', 'Sarah', 'Ryan', 'Lux'] (4) ['Wes', 'Sarah', 'Ryan', 'Lux']

team[3] = "Marie"
console.log(players, team) // (4) ['Wes', 'Sarah', 'Ryan', 'Marie'] (4) ['Wes', 'Sarah', 'Ryan', Marie]
```

- We can fix this issue by:

  -  creating a _real_ copy for the **array**
  ```
  // original team = ['Wes', 'Sarah', 'Ryan', Marie]
    team1 = team.splice(),
    team2 = [].concat(team),
    team3 = [...team],   // ES6 spread syntax
    team4 = Array.from(team);
  ```

  -  creating a _real_ copy for the **object**
      - Object.assign({}, reference)
      - ES6 spread for Object - [caniuse][1]
  ```
  const person = {
    name: 'Wes Bos',
    age: 80
  };

  const cap2 = Object.assign({}, person, { number: 99, age: 12 });
  console.log({person, cap2});
  // { cap2 : {name: 'Wes Bos', age: 12, number: 99},
  // person : {name: 'Wes Bos', age: 80}
  // }


  const cap3 = { ...person };
  console.log('cap3::::', cap3) // cap3:::: {name: 'Wes Bos', age: 80}
  ```


**BUT** it's a _shallow_ copy, that means it's **only 1 level deep**

```
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

const wes2 = Object.assign({}, wes);
wes2.social.twitter = '@coolwes'

console.log(wes.social) // social : {twitter: '@wesbos', facebook: 'wesbos.developer'}

console.log(wes2.social)

```

#### How to get a deep clone ?

First you can think if you really need to deep clone an object and if there is not a better way to structure your data.

1. lodash has a `_.cloneDeep method` - [available on npm][2]
2. Wes also presents a _cheap_ solution (it could be an issue for the performance) : `JSON.parse(JSON.stringify())`


    - The [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) methods converts a JavaScript value to a JSON string

    - The [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) method parses a JSON string, constructing the JavaScript value or object described by the string

[1]:https://caniuse.com/?search=object%20spread
[2]: https://www.npmjs.com/package/lodash.clonedeep
