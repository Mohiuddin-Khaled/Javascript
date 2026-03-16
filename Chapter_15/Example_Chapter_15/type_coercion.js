// type coercion
// double equal
// triple equal

// === denote value and same type
// console.log(2 === '2'); // not same
// console.log(1 === true); // not same
// console.log(null === undefined); // not same
// console.log('' === 0); // not same
// console.log(null === undefined); // not same
// console.log('' === 0); // not same
// console.log(false === '0'); // not same
// console.log([] === false); // not same

// == denote value equal or not
// console.log(2 == '2');
// console.log(1 == true);
// console.log(null == undefined);
// console.log('' == 0);
// console.log(false == '0');
// console.log([] == false);

// == is known as type coercion 
// console.log(false == '1'); // false
// console.log(true == '1'); // true
// console.log(true == '10'); // false 
// console.log([] == 0); // true ( "" == 0 ) => 
// console.log([].toString());

// [].toString() => "" => 0
// [1].toString() => "1" => 1

// console.log(null == undefined); // true
// console.log(null === undefined); // false 

console.log(NaN == NaN); // NaN => Not a Number 
console.log(NaN === NaN); // NaN => Not a Number 


