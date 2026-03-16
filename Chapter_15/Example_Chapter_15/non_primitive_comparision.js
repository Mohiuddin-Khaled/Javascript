// non-primitive => array, object
// non primitive type comparison

console.log({} == {}); // false 

// non primitive data types are compared by reference each time
// check reference not actual values

const first = {};
const second = first; // reference 
console.log(first == second);

