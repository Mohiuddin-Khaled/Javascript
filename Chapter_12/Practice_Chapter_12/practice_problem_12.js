// create a rest operator that holds array elements except first and second elements

const ar = [10, 20, 3, 30, 300, 3000];

const [first, second, ...arr] = ar;

console.log(arr);