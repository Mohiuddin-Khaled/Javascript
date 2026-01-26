// create a rest operator that holds parameters of an array 

function numMean(...numbers) {
    let sum = 0;
    const len = numbers.length;
    for (const number of numbers) {
        sum += number;
    }
    return (sum / len).toFixed(2);
};

const value = numMean(5, 23, 45, 1, 89, 34);

console.log(value);

