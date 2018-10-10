/* ------------------------------------------------------------------------------------------------------------------------- */
//variables

var a = 0; //classic syntax. Function scope. Can be referenced by lines above where it was declared

let a = 0; //same as var, but has block scope. Can only be referenced by lines below where it was declared

const a = 0; //cannot be reassigned. More memory efficient

const obj = {}; //a pointer to an object in memory. It is good practice to make these constants so the pointer cant
//                be overwritten (if an object has no pointers to it, it will be removed from memory)

/* ------------------------------------------------------------------------------------------------------------------------- */
//backtick strings

const myString = ``;

const myString = `These strings don't need to / \ be "escaped"!`;

const myString = `They also don't need to be concatinated with "a" + "b",
                  but you can do ${a + b} or refer to your friend ${name}!`;

/* ------------------------------------------------------------------------------------------------------------------------- */
//objects
//can have an arbitrary number of key-value pairs

const user = {
  name: 'Dan',
  age: 27,
  hobby: 'Coding',
  isMarried: false
};

//this data can be used by referring to <object>.<

/* ------------------------------------------------------------------------------------------------------------------------- */
