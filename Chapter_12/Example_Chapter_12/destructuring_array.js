// array destructuring use: [ ]
// array destructuring

// const numbers = [45, 99];
// const [first, second] = numbers;
// console.log(first);
// console.log(second);


// destructuring return value from function
// function doubleThem(a, b) {
//     return [a * 2, b * 2];
// };

// const [first, second] = doubleThem(6, 9);
// console.log(first, second);

// destructuring function using array
// function sum([a, b]) {
//     return a + b;
// }

// console.log(sum[5, 10]);

// skipping values in array destructuring
const numbers = [1, 2, 3, 4, 5];
const [, second, , fourth] = numbers;
console.log(second);
console.log(fourth);
