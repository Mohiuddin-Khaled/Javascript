// upper case string
// lower case string
// upper case or lower case string are not similar

// case sensitive
// const subject = 'Chemistry';
// const book = 'chemistry';
// if (subject === book) {
//     console.log('I am reading book');
// }
// else {
//     console.log("Didn't match string");
// }

// lower case: abcd
// upper case: ABCD

// password is case sensitive
// email address is not case sensitive

// upper case convert into lower case
// const names = 'noMAD d MAD';
// const lower = names.toLowerCase();
// console.log(lower);


// lower case convert into upper case
// const names = "no man d MAN";
// const upper = names.toUpperCase(names);
// console.log(upper);

// compare case sensitive string 
const subject = 'Chemistry';
const book = 'chemistry';
if (subject.toLowerCase() === book.toLowerCase()) {
    console.log("strings are match!");
}
else {
    console.log("strings didn't match!");
}