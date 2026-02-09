// create an array and check whether each element is grater than 18

const ages = [16, 23, 45, 34, 23, 33];

const passedAge = ages.every(age => age >= 18);

console.log(passedAge);