// create an object that remove a property using the spread operator

const young = { name: "David", age: 30, country: "New York" };

// remove `country` using object destructuring + spread
const { country, ...restOp } = young; // rest operator

console.log(restOp);

