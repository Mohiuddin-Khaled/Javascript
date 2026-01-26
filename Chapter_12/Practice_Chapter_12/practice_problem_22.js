// What is a default export? what benefits does it provide during import?

// Default Export 
/*
# A default export allows a module to export one main value (function, class, object).
# Each module can have only one default export.
*/

// Advantage of Default Export
/*
 # You can choose any name when importing
 # No need to use object destructing { }
 # Cleaner and easier syntax
*/

// Example Code

// Default export
export default function add(a, b) {
    return a + b;
}

// Import default export
import sum from "./math.js";

console.log(sum(2, 3));

