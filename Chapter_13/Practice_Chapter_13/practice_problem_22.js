// object properties sorted in ascending order

const friends = [
    { name: 'Ali', age: 29 },
    { name: 'Sara', age: 22 },
    { name: 'Tara', age: 35 }
];

friends.sort((a, b) => a.age - b.age);  // ascending order sort 

console.log(friends);

