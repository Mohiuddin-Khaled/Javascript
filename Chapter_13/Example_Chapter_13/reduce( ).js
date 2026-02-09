// sum of array elements

// const numbers = [4, 5, 7, 1, 2, 66];

// let sum = 0;
// for (const num of numbers) {
//     sum += num;
// }
// console.log(sum);

// reduce() method syntax
// arrayName.reduce(callbackFunction, initialValue);

// for (const num of numbers) {
//     sum = sum + num;
// }

// generic form
// (accumulator, currentValue) => doSomeWork;

// (doSomeWork = accumulator + currentValue);

// another
// (accumulator, currentValue) => accumulator + currentValue;

// callbackFunction => doSomeWork
// callbackFunction => accumulator + currentValue

// numbers.reduce((accumulator, currentValue) => doSomeWork, initialValue);

// simple example of reduce() method
// const numbers = [4, 5, 7, 1, 2, 66];
// const total = numbers.reduce((sum, num) => sum + num, 0);
// console.log(total);

// different example
// const numbers = [32, 34, 73, 13, 22, 5];
// const total = numbers.reduce((p, c) => p + c, 0);
// console.log(total);

// array of object
// dot or bracket notation
const products = [
    { id: 1, name: 'lenovo', price: 65000 },
    { id: 2, name: 'dell', price: 45000 },
    { id: 3, name: 'Hp', price: 40000 },
    { id: 4, name: 'iMac', price: 165000 }
];

// map() method
// const names = products.map(p => p.name);
// console.log(names);

// filter() method
// const expensive = products.filter(p => p.price > 50000);
// console.log(expensive);

// find() method
// const affordable = products.find(p => p.price < 50000);
// console.log(affordable);

// reduce() method
const total = products.reduce((accumulator, current) => accumulator + current.price, initialValue = 0);
console.log(total);