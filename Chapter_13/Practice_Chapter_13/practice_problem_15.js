// calculate the product price of each property in an object using reduce() method 

const obj = [
    { name: 'shampoo', price: 100 },
    { name: 'soap', price: 50 },
    { name: 'toothpaste', price: 75 }
];

const total = obj.reduce((sum, value) => sum + value.price, 0);

console.log(total);