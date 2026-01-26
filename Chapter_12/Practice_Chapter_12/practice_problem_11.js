// create a rest operator that holds properties of an object except language & specialty properties

const programmer = {
    name: "Sophia",
    language: "JavaScript",
    experience: 5,
    specialty: "Frontend",
    tools: "React"
};

const { language, specialty, ...details } = programmer;

console.log(details);


