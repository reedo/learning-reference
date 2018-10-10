const myArray = [1, 7, 4, 9, 7, 3, 9, 14, 27, 12];

/* ------------------------------------------------------------------------------------------------------------------------- */
//standard loop thorugh an array (newArray = myArray * 2)
const newArray = [];
for (let i = 0; i < myArray.length; i++) {
  newArray.push(myArray[i] * 2);
}

//--------------------------------------------------------------------------
//same result, but using forEach

const newArray = [];
myArray.forEach(num => newArray.push(num * 2));

//--------------------------------------------------------------------------
//same result, but using map
//map is safer than forEach, because it requires the function to return an element each time

const newArray = myArray.map(num => num * 2);

/* ------------------------------------------------------------------------------------------------------------------------- */
//filter
//creates a new array containing only values from the orginal array that pass the condition passed in
//the condition must be a function that returns a boolean

const filteredArray = myArray.filter(num => num > 5); //returns an array containing only the numbers greater than 5
//the function needs to return true or false, and that will determine if the element is filtered out or not

/* ------------------------------------------------------------------------------------------------------------------------- */
//reduce
//returns the accumulated value of each element in the array. In the example below, its the sum of the arrays values
//the accumulator varialbe is provided by the reduce method

const reducedArray = myArray.reduce(
  (accumulator, number) => accumulator + number, //a function that adds eaach number to the accumulator
  initialValue //the starting value for the accumulator
);

/* ------------------------------------------------------------------------------------------------------------------------- */
