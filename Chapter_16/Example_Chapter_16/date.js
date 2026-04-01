// javascript date object
// Date()
// const now = new Date(); // current time
// console.log(now);

// specific date set
// date
// const specificDate = new Date("2026-03-28");
// console.log(specificDate);

// specific date and time set
// date & time(hour, minute, second)
// const dateTime = new Date(2026, 3, 28, 9, 50, 22);
// console.log(dateTime);


// different method of Date() object
// get time and date
/*
    getFullYear()  => year

    getMonth()  => Month(0 - 11, january = 0, December = 11)

    getDate()  => Date(dates in a month, 1 - 31)

    getDay()  => weekly Days(0 - 6, sunday = 0, monday = 1)

    getHours() => Hours(0 - 23)

    getMinutes()  => Minute

    getSeconds()  => Second
*/

// set time and date 
/*
    setFullYear()  => Year

    setMonth()  => Month

    setDate()   => Date 

    setHours()  => Hour

    setMinutes()  => Minute

    setSeconds()  => Second 
*/


// time difference 
// two set difference result are mili-second 
const date1 = new Date("2026-01-01");
const date2 = new Date("2026-11-31");
const diffInMilSecond = date2 - date1;
// console.log(diffInMilSecond);
const diffInDays = diffInMilSecond / (1000 * 60 * 60 * 24);
console.log(diffInDays);

// second = milisecond / 1000
// minute = second / 60
// hour = minute / 60
// day = hour / 24

// Date() object
    // Time manipulation
    // Time difference 
    // converted specific time format  

