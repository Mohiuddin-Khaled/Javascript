// create a rest operator that hold parameters except first and second parameters

function fun(a, b, ...numbers) {
    let sum = 0;
    for (const number of numbers) {
        // console.log(number);
        sum += number;
    }
    return sum;
};

const sum = fun(10, 20, 30, 3, 30, 300, 3000);

console.log(sum);


