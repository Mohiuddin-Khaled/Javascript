// local scope
// block scope 

const weather = 'cold';
if (weather) {  // block scope 
    let temperature = 39;
};

// global variable 
console.log(weather);

// local variable 
console.log(temperature); // ReferenceError: temperature is not defined 