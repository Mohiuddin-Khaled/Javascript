// create an array that copies elements from an arrays using spread operator

const frontEnd = ["JavaScript"];
const backEnd = ["Node.js"];
const database = ["MOngoDB"];

const fullStack = [...frontEnd, ...backEnd, ...database];
console.log(fullStack); 