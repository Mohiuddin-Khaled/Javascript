// pass by reference 
// non primitive data type 

let person = {
    name: 'JS',
    age: 30
};

let newPerson = person;

console.log("Before change: ");
console.log(person);
console.log(newPerson);

newPerson.location = 'Browser';

console.log("After change: ")
console.log(person);
console.log(newPerson);
