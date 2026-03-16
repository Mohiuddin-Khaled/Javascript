// practice 1 page 273

// callback function 
// pass the function as a parameter 

function fun1(callback) {
    callback();
}

function fun2() {
    console.log('second function');
}

fun1(fun2);