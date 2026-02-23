// array is mutable => not changeable
// string is immutable => changeable
// array of string is mutable => changeable

// string is a sequence of characters
// const country = 'Bangladesh';   // string
// const division = "Chittagong";  // string

// const numbers = [54, 98, 78, 21, 65]; // array => index start from 0 to n - 1
// console.log(numbers.length);

// const capital = "Dhaka";
// console.log(capital.length);

// const capital = "Dha ka";
// console.log(capital.length);

// string elements are accessed using index
// const capital = "Dhaka";
// console.log(capital[0]);

// find specific character of a string
// using includes() method
// const names = 'Abid Sir';
// console.log(names.includes('d')); // true
// console.log(names.includes('k')); // false

// find single character and multiple character of a string
// using indexOf() method
// const language = 'javascript';
// console.log(language.indexOf('rip')); // valid index 6
// console.log(language.indexOf()); // invalid index -1

// array elements can be changed through using an index
// const numbers = [54, 98, 78, 21, 65];
// numbers[1] = 11;
// console.log(numbers);

// string elements can't be changed through using an index

let text = "Hello";
text[0] = "Y";   // not changeable // immutable
console.log(text);

// array of string elements can be changed through using an index
const fruits = ["Orange", "Apple", "Banana", "Jackfruit", "Watermelon"];
fruits[0] = "Coconut"; // changeable // mutable
console.log(fruits);
