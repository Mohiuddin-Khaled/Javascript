// use filter( ) method to get specific values based on condition

// if required the condition then return an array otherwise return empty array

// array element filter()
// const players = [75, 65, 67, 71, 55, 59];
// const selected = players.filter(p => p > 70);
// const arr = players.filter(q => q > 80);
// console.log(selected);
// console.log(arr);

// string element filter()
const friends = ['tom', 'john', 'micheal', 'oliver', 'tim', 'josh'];
const oldFriends = friends.filter(friend => friend.length > 4);
console.log(oldFriends);


