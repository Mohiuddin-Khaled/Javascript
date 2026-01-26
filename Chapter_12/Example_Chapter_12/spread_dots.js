// spread operator --> 3 dots(...)

/// find maximum number of numbers list or array
// const mx = Math.max(5, 23, 45, 1, 89, 34);
// console.log(mx);

// const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
/// const arrayMax = Math.max(numbers); // NaN -> Not a Number

/// spread operator (holds all array elements)
// const arrayMax = Math.max(...numbers);
// console.log(arrayMax);

// const friends = [4, 5, 87, 9];
// const buddy = friends; // non-primitive type(reference copy)
// buddy.push(12);
// console.log(buddy);
// console.log(friends);

// avoid reference using spread operator
// const friends = [4, 5, 87, 9];
// const buddy = [...friends];
// console.log(buddy);
// buddy.push(100);
/// friends.push(100);
// console.log(buddy);
// console.log(friends);

/// copy element using spread operator
/// add element
// const friends = [4, 5, 87, 9];
// const number = [...friends, 9999];
// console.log(number);

// spread operator and add elements
// const fruits = ["Apple", "Banana"];
// const moreFruits = ["Mango", ...fruits, "Orange"];
// console.log(moreFruits);

// arrays concatenate using spread operator
// const array1 = [1, 2];
// const array2 = [3, 4];
// const combinedArray = [...array1, ...array2];
// console.log(combinedArray);

// copy or cloned object using spread operator
// const person = { name: "David", age: 30 };
// const clonedPerson = { ...person }; // if doesn't exist nested object when it shallow copy
// console.log(person);
// console.log(clonedPerson);

/// if exist nested object when it could deep copy 

// shallow copy object and add new properties
const student = { name: "David" };
const updateStudent = { ...student, age: 22 };
console.log(updateStudent);

