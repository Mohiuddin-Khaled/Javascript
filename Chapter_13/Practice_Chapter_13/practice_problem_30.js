// splice()
// selected range
// replace element

// splice 'Neymar' from the array and store them in another array
// splice 'Neymar' into the original array at a selected range, replacing 'Halland'

const players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe'];
const player = players.splice(2, 1, 'Halland');

console.log(player);

console.log(players);