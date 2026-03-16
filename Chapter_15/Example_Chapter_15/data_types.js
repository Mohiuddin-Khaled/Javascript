// primitive types: Number, Boolean, String (basic data type)
// non-primitive type: Object, Array

// primitive => primary => basic data type
// non - primitive => multiple data type

// value reassign (primitive)
// let x = 5;
// let y = x;
// console.log(x, y);
// y = 7;
// console.log(x, y);

// value reassign(non - primitive)
// let p = {
//     job: 'web developer'
// };
// let q = p;
// console.log(p, q);

// assign or reassign 
let p = {
    job: "web developer"
};
let q = p;
console.log(p, q);
q = {
    job: "backend developer"
};
console.log(p, q);
