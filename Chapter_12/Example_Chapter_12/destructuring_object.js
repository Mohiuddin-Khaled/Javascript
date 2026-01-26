// Destructuring popular in ES6
// value separate from array or object

// object destructuring use : { }
// destructuring syntax 
// const { name, age, money, phone } = actor;

// object destructuring
const actor = {
    name: 'David',
    age: 30,
    phone: '01325236768',
    money: 123231231
};

// object properties using dot notation
// const name = actor.name;
// const age = actor.age;
// const phone = actor.phone;
// const money = actor.money;
// console.log(name, age, phone, money);

// shortcut method: destructuring
// const { name, age, money, phone } = actor;
// console.log(name);
// console.log(age);
// console.log(money);
// console.log(phone);

// change property name
// object destructuring with Alias
// const { name, age: boyos, money, phone } = actor;
// console.log(name);
// console.log(boyos);

// object destructuring & change property name
// const book = { title: "1984", author: "George Orwell" };

// object destructuring with Alias
// const { title: bookTitle, author: bookAuthor } = book;
// console.log(bookTitle);
// console.log(bookAuthor);

// default value
// const person = { name: "David", age: 25 };
// const { name, phone = "N/A" } = person;
// console.log(name);
// console.log(phone);

// destructuring function parameters
// function introduce({ name, age }) {
//     console.log(`Name: ${name}, Age: ${age}`);
// };

// const user = { name: "David", age: 22, hobby: "Reading" };
// introduce(user);

