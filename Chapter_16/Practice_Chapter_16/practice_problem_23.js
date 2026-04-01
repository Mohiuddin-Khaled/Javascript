// array convert to set 

const arr = [1, 2, 3, 4, 2, 1, 5, 5]; // array 
const mySet = new Set(arr); // set
// console.log(mySet);

// set convert to array 
const newArr = [...mySet];
console.log(newArr);
