// practice 1 page 279

// create a function to return tax amount from a person's salary 

// global variable
const taxRate = 15;

function vat(amount) {
    const taxAmount = amount * (taxRate / 100);
    return taxAmount;
}

const salary = 45000;
console.log(vat(salary));