// what is the difference between 'Named Export' and 'Default Export'?

// Named Export (export multiple things, import by exact name or alias)
/*
 # You can export multiple values from a file.
 # Must import using the exact same name (unless you use as for alias).
 # Destructuring syntax use { } when importing.
*/

// Example code
// Name Export
export function add(a, b) {
    return a + b;
}
export function multiply(a, b) {
    return a * b;
}

// Name Import
import { add as sum, multiply as multi } from "./math.js";
console.log(sum(2, 3));
console.log(multi(4, 5));

// Default Export (export one main thing, import with any name you like.)
/*
 # File can have only one default export.
 # Import can use any name you choose.
 # No needed destructuring { } when importing.
*/

// Example Code

// Default Export
export default function add(a, b) {
    return a + b;
}

// default
import sum from "./math.js";
console.log(sum(2, 3)); // 5
