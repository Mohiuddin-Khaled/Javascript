// create a rest operator that holds properties of an object except title property

const project = { id: 101, title: "Web App", budget: 3000, client: "Tech Crop" };
const { title, ...operators } = project;

console.log(operators);
