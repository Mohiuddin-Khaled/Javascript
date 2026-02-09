// calculate the sum of each element in an array using the reduce() method

const numbers = [100, 200, 300, 400, 500];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue = 50);

console.log(sum);
