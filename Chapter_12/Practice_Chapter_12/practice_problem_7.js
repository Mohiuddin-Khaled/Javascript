// destructured name and city properties of an object

const person = {
    name: "David",
    city: "Miami"
};

// default value 
const { name, city, phone = "N/A" } = person;
console.log(name);
console.log(city);
console.log(phone);