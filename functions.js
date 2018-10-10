/* ------------------------------------------------------------------------------------------------------------------------- */
//closures
//keeps greet in its own scope, so its never mixed up with another variable called greet

const first = () => {
  const greet = 'hi';
  const second = () => {
    alert(greet);
  };
  return second; //the function that is returned will remember the value of greet at the point the function is returned,
  //               so if the value of greet changes later, it will not affect the value of greet inside this function
};

const newFunc = first();
newFunc();

/* ------------------------------------------------------------------------------------------------------------------------- */
//currying

const multiply = (a, b) => a * b; //passes a and b into a function then returns a * b

const curriedMultiply = a => b => a * b; //passes a into a function then passes a and b into a function
//                                         then returns those values multiplied. Example:
curriedMultiply(3); //returns a function that takes an input (b) and will return b * 3
curriedMultiply(3)(4); //returns 3 * 4

/* ------------------------------------------------------------------------------------------------------------------------- */
//compose

const compose = (f, g) => a => f(g(a)); //feeds value/object a into function g, then feeds the output of g into function f

/* ------------------------------------------------------------------------------------------------------------------------- */
//callback funtions
//non-blocking, so the code will continue on

//there is an extra parameter called 'callback'. This must be a function. The output of processItem will be fed into
//the function passed in by the call
const processItem = (item, callback) => {
  //do processing here
  return callback(item); //item is passed into the callback function, then that function is returned
};

//so it would be called like this:
const unprocessedItem = { name: 'item1' }; //just an object for demonstration purposes
const processedItem = processItem(unprocessedItem, () => {
  console.log(`${item.name} has been processed`); //this function is called when the processItem function has completed.
  //                                                the main block of code will continue to execute, whilst the callback
  //                                                function runs in the background
  return item;
});

/* ------------------------------------------------------------------------------------------------------------------------- */
