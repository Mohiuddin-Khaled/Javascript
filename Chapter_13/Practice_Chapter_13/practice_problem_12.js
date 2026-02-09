// create an array and check whether an element equal to 'hello'

const words = ['David', 'Alex', 'Adam', 'Alexander'];
const str = 'hello';
const atLeast = words.some(word => word.length == str.length);
console.log(atLeast);

