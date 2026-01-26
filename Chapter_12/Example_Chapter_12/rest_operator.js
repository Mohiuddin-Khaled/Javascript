// Rest Operator (...)
// Rest Operator hold multiple values from a function or array or object

// rest operator(...) use in array
// const [first, second, ...rest] = [10, 20, 30, 40, 50];
// console.log(first);
// console.log(second);
// console.log(rest); // rest parameter

// rest operator(...) use in object
// const person = { name: "Alice", age: 25, city: "Dhaka", country: "Bangladesh" };
// const { name, city, ...details } = person; // object destructured, rest parameter
// console.log(name);
// console.log(city);
// console.log(details);

// rest operator use in function
function multiply(multiplier, ...numbers) {
    console.log(multiplier);
    console.log(numbers);
};

multiply(2, 1, 2, 3);
multiply(3, 4, 5, 6);