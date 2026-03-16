// check whether two arrays refer to the same reference 

const ar = [12, 12];
const arr = ar;

if (ar === arr) {
    console.log('both are equal');
}
else {
    console.log('both are not equal');
}