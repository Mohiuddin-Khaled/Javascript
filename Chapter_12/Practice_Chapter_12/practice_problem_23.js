// How does the 'as' keyword help in renaming ?

// 'as' keyword
/*
# The 'as' keyword is used to rename (alias) exported or imported values.
*/

// rename use 'as'
/*
 # To avoid name conflicts.
 # To use clearer or shorter names.
 # To improve readability.
 # To keep naming consistent.
*/

// Example 
// math.js
export default function add(a, b) {
    return a + b;
}

// main.js
import calculate from "./math.js";
console.log(calculate(4, 5)); // 9
