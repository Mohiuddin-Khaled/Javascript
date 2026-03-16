// javascript scope types: 
// 1. local scope
// !! a. block scope
// !! b. function scope 
// 2. global scope
// 3. lexical scope

// block => { }

// !! block scope 
// if condition block code 
// if (true) {
//     let message = "This is inside an if block";
//     console.log(message);
// }

// for loop block code 
// for (let i = 0; i < 3; i++) {
//     let loopMessage = "This is inside a for loop block";
//     console.log(loopMessage);
// }

// while loop block code 
// let count = 0;
// while (count < 5) {
//     console.log(count);
//     count++;
// }

// try-catch block code 
try {

} catch (error) {

}

// !! function scope 
// function block code
// function block or local scope 

function add(a, b) {
    const sum = a + b;
    return sum;
}


// !! code block 
/*
    {
        !! code 
    }
*/