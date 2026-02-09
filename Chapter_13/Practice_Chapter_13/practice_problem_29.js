// splice()
// selected range
// replace element

// splice 'Joker' and 'Cherry' from the array and store them in another array
// splice 'Batman' and 'Superman' into original array at a selected range

const movieList = ['Inception', 'Titanic', 'Joker', 'Avatar', 'Interstellar'];

const movie = movieList.splice(2, 2, 'Batman', 'Superman');

console.log(movie);

console.log(movieList);