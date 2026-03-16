// function scope 
// local scope 

function add(a, b) {
    const total = a + b;
    console.log(a, b);
    return total;
}

// trying to access function parameter from outside 
console.log(a, b); // Uncaught ReferenceError: a is not defined 

add(5, 7);