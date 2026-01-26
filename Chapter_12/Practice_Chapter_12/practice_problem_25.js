// Is it possible to have multiple default exports from a single file? How can it be done?

// Multiple default export or not
/* 
 # No, it is not possible to have more than one default export in a single file.
 # A module can have only one default export.
 # You can, however, have multiple named exports along with one default export.
 # If you try to do multiple default exports, Node/Browser will throw a SyntaxError.
*/

// Example Code
/*
# Only one default export per file (add)
# Can still have multiple named exports (multiply, etc.)
# Default import can be named anything (sum)
*/

// Default Export
export default function add(a, b) {
    return a + b;
}

// Named Export
export function multiply(a, b) {
    return a * b;
}

// Default Export
import sum from "./math.js";
console.log(sum(2, 3));      // 5

// Named Export
import { multiply } from "./math.js";
console.log(multiply(4, 5)); // 20
