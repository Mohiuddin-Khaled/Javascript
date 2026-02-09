// using find() method to get first element based on condition

// if required the condition then return first element otherwise return undefined
const players = [75, 65, 67, 60, 71, 55, 59];
const selected = players.find(player => player > 70);
console.log(selected);