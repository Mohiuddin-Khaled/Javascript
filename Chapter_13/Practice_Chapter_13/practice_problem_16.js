// create a products list object

// calculate the product price of each property in an object using reduce() method 

const products = [
    { name: 'Pen', price: 5 },
    { name: 'Book', price: 50 },
    { name: 'Bag', price: 100 }
];

const total = products.reduce((sum, product) => sum + product.price, 0);

console.log(total);