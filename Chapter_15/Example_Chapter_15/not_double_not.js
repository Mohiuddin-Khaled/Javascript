// value inverse
// !false = true
// !true = false

// check condition value is true or false
// not operator
// const y = '';
// if (!y) {
//     console.log('value of y is falsy!');
// }

// double not

// !!false = false
// !!true = true
// console.log(!5);
// console.log(!!5);

// console.log(!"hello");
// console.log(!!"hello");

// console.log(!42);
// console.log(!!42);

// console.log(!{});
// console.log(!!{});

// console.log(![]);
// console.log(!![]);

// console.log(!"");
// console.log(!!"");

// console.log(!0);
// console.log(!!0);

// console.log(!null);
// console.log(!!null);

// console.log(!undefine);
// console.log(!!undefined);

// console.log(!NaN);
// console.log(!!NaN);

// double not(!!) value converted to Boolean type(true, false)
// const value = "coding";
// console.log(!value);
// console.log(!!value);

const value = 0;
if (!!value) {
    console.log("truthy");
}
else {
    console.log("falsy");
}

