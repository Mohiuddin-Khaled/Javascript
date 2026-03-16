// block scope code 
const smart = true;

if (smart) {
    let message = "cloudy weather";
    console.log("rainy day");   // local scope 
}

// trying to access outside of the block 
console.log(message); // ReferenceError: message is not defined 

console.log(smart); // global scope 