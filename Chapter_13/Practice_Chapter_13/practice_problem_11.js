// create an array and check whether each element is divided by 5

const numbers = [21, 33, 45, 34, 39, 60];

const allPassed = numbers.every(num => (num % 5) == 0);

console.log(allPassed);