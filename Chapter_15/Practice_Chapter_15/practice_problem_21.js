// callback function
// pass an object as a parameter
// print result using callback function 

function getObj(obj, callback) {
    callback(obj);
}

function result(value) {
    for (const para in value) {
        console.log("parameter is:", para);
    }
}

// object
const value = {
    name: 'alex',
    age: 32
};

getObj(value, result);