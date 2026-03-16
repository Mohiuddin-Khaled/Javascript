// reference types
// property value changed in both objects
// non - primitive
// let p = {
//     job: 'web developer'
// };
// let q = p;
// console.log(p, q);
// q.job = 'front-end developer';
// console.log(p, q);
// console.log()

// pass by value
// primitive type: number, string, boolean
// primitive type => pass by value
// function changeValue(num) { // copy value not reference
//     num = 20;
//     console.log('Inside function: ', num);
// };
// let x = 10;
// console.log('Before function call: ', x)
// changeValue(x); // function call => pass by value
// console.log('After function call: ', x);

// pass by reference
// non - primitive type: object, array
// non - primitive => pass by reference
// function updateJob(person) { // copy value and reference
//     person.job = "designer";
//     console.log('Inside function: ', person);
// }
// let employee = { 'job': 'developer' };
// console.log('Before function call: ', employee);
// updateJob(employee); // pass by reference
// console.log('After function call: ', employee);

