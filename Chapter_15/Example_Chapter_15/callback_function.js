// function can receive any kinds of data like number, boolean, string, array, object

// function greeting(greatingHandler) {
//     console.log(greatingHandler);
// }

// function morningGreet() {
//     console.log('Good Morning');
// }

// greeting(morningGreet);

// function as argument
// function greeting(greatingHandler) {
//     greatingHandler();
// }

// function morningGreet() {
//     console.log('Good Morning');
// }

// greeting(morningGreet);

// callback function 
function calculate(a, b, callback) {
    const result = a + b;
    callback(result);
}

function printResult(value) {
    console.log("Result is:", value);
}

calculate(5, 10, printResult);