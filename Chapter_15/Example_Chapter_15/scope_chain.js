// variable access through scope chain
let names = 'John'; // global scope 
function first() {
    let names = 'Alex'; // local scope 
    function second() {
        console.log(names);
    }
    second();
};

first();