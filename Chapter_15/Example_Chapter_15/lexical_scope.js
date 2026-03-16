// lexical scope is principle of scoping
// variable accessability depends on code type and state 

// inner function and outer function 

function outerFunction() {
    let outerVar = "I'm from outer function";
    function innerFunction() {
        console.log(outerVar);
    }
    innerFunction();
};
outerFunction();

innerFunction(); // ReferenceError: innerFunction is not defined 