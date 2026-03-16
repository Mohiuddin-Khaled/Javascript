// callback function
// pass a number as a parameter
// print result using callback function

// create a function to divide a number by 5

function divide(num, callback) {
    const ans = num / 5;
    callback(ans);
}

function getResult(ans) {
    console.log("value is:", ans);
}

divide(45, getResult);