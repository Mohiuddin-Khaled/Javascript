// Divided each element of the array by 3 and return the new array

const numbers = [7, 10, 15, 20, 25, 30];

const newList = numbers.map(num => (num / 3).toFixed(2));

console.log(newList);

