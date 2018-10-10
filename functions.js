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
