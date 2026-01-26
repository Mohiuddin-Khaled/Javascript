// practice 1 page 214

// What is the difference between export and import? How do both work?

// Export
/*
 # Export is used to share code from one file, so it can be used in another file.
 # It makes variables, functions, or classes available outside the file.
*/

// Import
/*
 # Import is used to use code that was exported from another file.
 # It brings variables, functions, or classes into the current file.
*/

// Working Example

// Export function
export function add(a, b) {
    return a + b;
}
export function multiply(a, b) {
    return a * b;
}

// Import function
import { add, multiply } from "./math.js";
console.log(add(2, 3));
console.log(multiply(4, 5));