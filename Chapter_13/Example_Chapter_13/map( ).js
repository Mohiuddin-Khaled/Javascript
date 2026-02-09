// create a function that double the array elements
// function doubleAll(numbers) {
//     const double = [];
//     for (const num of numbers) {
//         const value = num * 2;
//         double.push(value);
//     }
//     return double;
// }
// const numbers = [4, 5, 2, 8, 10];
// console.log(doubleAll(numbers));


// map(.) and arrow(=>)

// double each element of the array
// const numbers = [4, 5, 2, 8, 10];
// const result = numbers.map(num => num * 2);
// console.log(result);

// add 5 to each element of the array
// divided each array element by 2
// const numbers = [12, 10, 8, 15, 7];
// const fiveBonus = numbers.map(num => num + 5);
// const halves = numbers.map(num => num / 2);
// console.log(fiveBonus);
// console.log(halves);

// crate an array that include length of each string in the array
// crate an array that include first character of each string in the array 
const friends = ['Tom', 'Jon', 'Micheal', 'Oliver'];
const lengths = friends.map(fnd => fnd.length);
const firstChar = friends.map(friend => friend[0]);
console.log(lengths);
console.log(firstChar);