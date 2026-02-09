// object properties sorting using custom compare function(sort())
const friends = [
    { name: 'Zara', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Anna', age: 30 }
];

// friends.sort((a, b) => a.age - b.age); // ascending sort

friends.sort((a, b) => b.age - a.age); // descending sort

console.log(friends);
