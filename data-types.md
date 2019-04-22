# Variables
```javascript
var a = 0;
```
Classic syntax. Function scope. Can be referenced by lines above where it was declared.
```javascript
let a = 0;
```
Same as var, but has block scope. Can only be referenced by lines below where it was declared.
```javascript
const a = 0;
```
Cannot be reassigned. More memory efficient.
```javascript
const obj = {};
```
A pointer to an object in memory. It is good practice to make these constants so the pointer cant be overwritten (if an object has no pointers to it, it will be removed from memory).
# Template literals (Backtick Strings)
```javascript
const myString = ``;

const myString = `These strings don't need to / \ be "escaped"!`;

const myString = `They also don't need to be concatinated with "a" + "b",
                  but you can do ${a + b} or refer to your friend ${name}!`;
```
# Objects
Can have an arbitrary number of key-value pairs.
```javascript
const user = {
  name: 'Dan',
  age: 27,
  hobby: 'Coding',
  isMarried: false,
};
```
This data can be used by referring to `Object.keys()`.