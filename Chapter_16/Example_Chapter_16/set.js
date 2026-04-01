// data storage in javascript
// using variable
// using array
// using object

// set is special type of data storage system
// storage each value is unique
// new Set() method

// array convert to set

// const mySet = new Set([1, 2, 3, 4, 5]);
// console.log(mySet);

// another way
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = new Set(numbers);
// console.log(uniqueNumbers);

// set convert to unique value array
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const arrToSet = new Set(numbers);  // new Set() method (set)
// const setToArr = [...new Set(numbers)]; // spread operator (array)
// console.log(setToArr); // set convert to unique array


// empty set
// new Set()
// using add() method
const mySet = new Set(); // declare a empty set
mySet.add(10);
mySet.add(20);
mySet.add(10); // value don't add in set
mySet.add(30);
console.log(mySet);

// check if exist any value or element in set
// has() method 
console.log(mySet.has(20));

// delete set value or element 
// delete() method 
mySet.delete(10);
console.log(mySet)

// Array vs Set
/*
    1. Array hold duplicate value but set hold unique value 

    2. Array value or element access through using index but set only work with value or element

    3. array less efficient (check duplicate or remove through using loop)  
    
    4. set more efficient (faster way to check duplicate or remove)
*/

