// practice 1 page 204

// create a rest operator that holds properties of an object except name property
const product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
};

const { name, ...properties } = product;
console.log(product);