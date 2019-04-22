# Old vs New Function Syntax
## Old
```javascript
function sum(a, b) {
  return a + b;
}
```
## New
```javascript
const sum = (a, b) => {
  return a + b;
};
```
If the return statement is a single line, the curly bracksts and the return keyword can be omitted.
```javascript
const sum = (a, b) => a + b;
```
If there is only one parameter, the brackets can be omitted.
```javascript
const double = a => a * 2;
```
Functions can also be anonymous.
```javascript
a => a * 2;
```

# Closures
Keeps greet in its own scope, so its never mixed up with another variable called greet.
```javascript
const first = () => {
  const greet = 'hi';
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();
```
The function that is returned (`second`) will remember the value of greet at the point the function is returned, so if the value of greet changes later, it will not affect the value of greet inside this function.

# Currying
Passes `a` and `b` into a function then returns `a * b`.
```javascript
const multiply = (a, b) => a * b;
```
Passes `a` into a function then passes `a` and `b` into a function then returns those values multiplied.
```javascript
const curriedMultiply = a => b => a * b;
```
Example:
```javascript
curriedMultiply(3); // returns a function that takes an input (b) and will return b * 3
curriedMultiply(3)(4); // returns 3 * 4
```

# Compose
```javascript
const compose = (f, g) => a => f(g(a));
```
Feeds value/object `a` into function `g`, then feeds the output of `g` into function `f`.

# Callback Funtions
Non-blocking, so the code will continue on.

There is an extra parameter called `callback`. This must be a function. The output of `processItem` will be fed into the function passed in by the call.
```javascript
const processItem = (item, callback) => {
  //do processing here
  return callback(item); //item is passed into the callback function, then that function is returned
};
```
So it would be called like this:
```javascript
const unprocessedItem = { name: 'item1' }; // just an object for demonstration purposes
const processedItem = processItem(unprocessedItem, () => {
  console.log(`${item.name} has been processed`); // this function is called when the processItem function has completed.
  return item;
});
```
The main block of code will continue to execute, whilst the callback function runs in the background.