let person={
    name:"Kanishk",
    age:30,
    isStudent:false
};
person.nationality = "Indian"; // Adding a new property
person.age = 31; // Modifying an existing property
console.log(person);    
console.log(person.name); // Accessing property using dot notation
console.log(person.isStudent); // Accessing property using dot notation
console.log(person["age"]); // Accessing property using bracket notation
console.log(typeof person); // Output: object