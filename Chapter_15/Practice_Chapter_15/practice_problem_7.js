// arguments and parameter didn't match 

function sum(a, b, c) {
    const add = a + b + c;
    console.log(c); // undefine 
    console.log(add); // NaN -> Not a Number 
}

sum(5, 10);