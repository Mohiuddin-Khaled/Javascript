// map(), filter(), find() method 

// arrow function 
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(num => num * 2); // arrow function is callback function
// console.log(doubledNumbers());


// normal function 
const numbers = [1, 2, 3, 4, 5];

const result = numbers.map(function (num) { // callback function 
    return num * 2;
});

console.log(result);

