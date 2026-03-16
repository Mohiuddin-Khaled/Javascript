
function inFun() {  // block scope
    let insideSecret = "internal secret hiding place";  // local scope
};

inFun();

console.log(insideSecret);  // ReferenceError: insideSecret is not defined 

