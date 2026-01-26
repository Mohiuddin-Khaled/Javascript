// Import functions from math.mjs

// import { add, multiply } from "./math.mjs";
// console.log(add(2, 3));
// console.log(multiply(4, 5));

// alias or rename object destructuring
// import { add, multiply } from "./math.mjs";

import { add as sum, multiply as multi } from "./math.mjs"

console.log(sum(5, 3));
console.log(multi(5, 3));

// import specialGreet from "./greeting.mjs";
// console.log(specialGreet());