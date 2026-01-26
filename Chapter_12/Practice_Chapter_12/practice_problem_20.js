// create an object that copies and update properties from an object using spread operator

const car = { make: "Toyota", model: "Corolla", year: 2020 };

const updateObj = { ...car, year: 2032 };

console.log(updateObj);