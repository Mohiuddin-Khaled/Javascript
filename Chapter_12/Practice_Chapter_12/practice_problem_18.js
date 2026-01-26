// create an object that copies properties from an object using spread operator

const website = { name: "MySite", type: "e-commerce", status: "active" };

const web = { ...website, theme: "dark" };

console.log(web);