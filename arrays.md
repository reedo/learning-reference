Standard loop thorugh an array (`newArray = myArray * 2`):
```javascript
const newArray = [];
for (let i = 0; i < myArray.length; i++) {
  newArray.push(myArray[i] * 2);
}
```
Same result, but using forEach:
```javascript
const newArray = [];
myArray.forEach(num => newArray.push(num * 2));
```
Same result, but using map:
```javascript
const newArray = myArray.map(num => num * 2);
```
Map is safer than forEach, because it requires the function to return an element each time.

# Filter
Creates a new array containing only values from the orginal array that pass the condition passed in.

The condition must be a function that returns a boolean.
```javascript
const filteredArray = myArray.filter(num => num > 5);
```
Returns an array containing only the numbers greater than 5.

The function needs to return true or false, and that will determine if the element is filtered out or not.

# Reduce
Returns the accumulated value of each element in the array. In the example below, its the sum of the arrays values.

The accumulator varialbe is provided by the reduce method.
```javascript
const reducedArray = myArray.reduce(
  (accumulator, number) => accumulator + number, // a function that adds each number to the accumulator
  initialValue, // the starting value for the accumulator
);
```