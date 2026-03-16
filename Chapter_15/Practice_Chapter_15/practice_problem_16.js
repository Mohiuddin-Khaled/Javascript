// create a function to check whether a number and boolean are same or not 

function compare(num, isBool) {
    if (num == isBool) // type coercion 
    {
        console.log("same");
    }
    else {
        console.log("not same");
    }
}

compare(4, true);