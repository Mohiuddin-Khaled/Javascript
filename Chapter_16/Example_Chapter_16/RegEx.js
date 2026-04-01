// Regular Expression
// string or pattern matching

// RegEx method
/*
    /string/

    new RegExp()
*/

// method 1
// const pattern = /apple/; // forward slash

// method 2
// const pattern = new RegExp("apple"); // RegEx constructor

// RegExp() use to find specific word in a string

// test() => true or false
// const sentence = "I have an apple";
// const pattern = /apple/;
// const str = new RegExp("Lira");
// console.log(pattern.test(sentence)); // true
// console.log(str.test(sentence)); // false


// replace() => replace word
// const sentence = "I have an apple and another apple";
// const newSentence = sentence.replace(/apple/g, "banana");
// console.log(newSentence);

// common RegEx pattern
/*
    - . character 
    - \d digit(0 to 9)
    - \w word character (a to z, A to Z, 0 to 9, _)
    - \s space 
    - + pattern have one or multiple times
    - * patter have 0 or multiple times 
    - ^ text start 
    - $ text end 
*/


