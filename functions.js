/* ------------------------------------------------------------------------------------------------------------------------- */
//keeps greet in its own scope, so its never mixed up with another variable called greet

const first = () => {
  const greet = 'hi';
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

/* ------------------------------------------------------------------------------------------------------------------------- */
