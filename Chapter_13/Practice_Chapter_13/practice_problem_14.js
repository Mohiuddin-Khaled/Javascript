// practice 1 page 228

// calculate the sum of each element in an array using the reduce() method

const ar = [5, 10, 15, 20, 25];

const total = ar.reduce((sum, num) => sum + num, 0);

console.log(total);