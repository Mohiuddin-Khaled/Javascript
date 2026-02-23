// reverse string
// rakeb  // bekar
// stressed // desserts
// flow // wolf

// const sentence = "I am learning Web Dev";
// for (const letter of sentence) {
//     console.log(letter);
// }

// reverse = ""     // empty string
// letter // loop variable
// reverse = reverse + letter

// 1st loop
/*
    reverse = ""
    letter = 'W'
    reverse = letter + "";
    reverse = W + "";
*/

// 2nd loop
/*
    reverse = 'W'
    letter = 'e'
    reverse = letter + 'W'
    reverse = 'e' + 'W'
*/

// 3rd loop
/*
    reverse = 'eW'
    letter = 'b'
    reverse = letter + reverse 
    reverse = 'n' + 'eW'
*/

const sentence = "I am learning Web Dev";
let reverse = "";
for (const letter of sentence) {
    reverse = letter + reverse;
}
console.log(reverse);