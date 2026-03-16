// non primitive data type 
// pass by reference 

const arr = [1, 2, 3];
let arr2 = arr;
console.log(arr, arr2);

arr2.push(88); // add element in array with reference 
console.log(arr, arr2); // changed array
