// splice() method
// change selected portion of an array
// erase or remove or delete array elements

// splice(index, number of elements)

// const movies = ['Jaws', 'Rocky', 'Alien', 'Avatar', 'Coco', 'Up', 'It'];
// const removed = movies.splice(2, 3); // index, element number
// console.log(removed); // removed items
// console.log(movies); // change original array elements 

// replace array elements by splice() method 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const deleted = numbers.splice(3, 3, 99, 100); // 3 position replaced by two elements

// console.log(deleted);
// console.log(numbers);

const replaced = numbers.splice(3, 3, 101, 102, 103);
console.log(replaced);
console.log(numbers);
