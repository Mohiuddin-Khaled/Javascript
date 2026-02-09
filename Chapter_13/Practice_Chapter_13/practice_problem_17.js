// calculate the multiplication of all element in an array using the reduce() method

const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, initialValue = 1);

console.log(total);

