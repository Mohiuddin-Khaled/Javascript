// null and undefine

// step 1: declared a variable and do not assign value to it
// let first;
// console.log(first);

// step 2: function does not have a return statement so it return undefine
// function second(a, b) {
//     const total = a + b;
// }
// console.log(second());

// step 3: argument and parameter doesn't match
// function third(a, b, c, d) {
//     console.log(a, b, c, d);
// };
// third(2, 5);

// step 4: function has return statement but does not have a variable or value to return
// function noNegative(a, b) {
//     if (a < 0 || b < 0) {
//         return; // not return anything
//     }
//     return a + b;
// }
// console.log(noNegative(2, -5));

// step 5: property does not exists in an object
// const fifth = {
//     id: 2,
//     name: 'Five',
//     age: 40
// };
// console.log(fifth.salary);

// step 6: invalid index or position
// const sixth = [4, 89, 87, 56, 54];
// console.log(sixth[51]);

// step 7: delete element
// handle the case where element does not exists
// const seventh = [8, 9, 7, 6, 4];
// delete seventh[1];
// console.log(seventh[1]);

// step 8: assign undefine to the variable
// const eight = undefined;
// console.log(eight);

// null vs undefine 
console.log(typeof undefined);
console.log(typeof null);

// null is a object
