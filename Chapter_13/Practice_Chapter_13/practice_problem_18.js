// Find the maximum value in an array using reduce() method

const numbers = [10, 20, 30, 40, 50];

const mxValue = numbers.reduce((mx, num) => Math.max(mx, num));

console.log(mxValue);
