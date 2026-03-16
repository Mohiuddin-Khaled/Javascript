// call a function inside another function using callback 

function fun1(value, callback) {
    callback(value);
}

function fun2(value) {
    console.log(value);
}

fun1("output", fun2);

