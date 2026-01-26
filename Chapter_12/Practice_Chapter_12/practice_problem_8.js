// destructured properties of an object

const teacher = {
    name: "Maria",
    profession: "Teacher"
};

// object destructuring with Alias
const { name, profession: job } = teacher;
console.log(name);
console.log(job);