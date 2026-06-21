// Example of using the push() method to add an element to an array
let fruits = ["apple", "banana"];
fruits.push("orange");  
console.log(fruits);  // Output: ["apple", "banana", "orange"]

// Example of using the pop() method to remove the last element from an array
let removedFruit = fruits.pop();  
console.log(fruits);  // Output: ["apple", "banana"]
console.log(removedFruit);  // Output: orange

// Example of using the shift() method to remove the first element from an array
let firstFruit = fruits.shift();  
console.log(fruits);  // Output: ["banana"]
console.log(firstFruit);  // Output: apple

// Example of using the unshift() method to add an element to the beginning of an array
fruits.unshift("apple");  
console.log(fruits);  // Output: ["apple", "banana"]

// Example of using the splice() method to add and remove elements from an array
let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow");  
console.log(colors);  // Output: ["red", "yellow", "green", "blue"]     
colors.splice(0,0,"orange"); // Output: ["orange", "red", "yellow", "green", "blue"]
colors.splice(2,1); // Output: ["orange", "red", "green", "blue"] 

// Example of using the slice() method to create a new array from a portion of an existing array
let brand = ["Nike", "Adidas", "Reebok", "Puma", "Under Armour","Asics"];
let newBrand = brand.slice(0, 3);
console.log(newBrand);  // Output: ["Nike", "Adidas", "Reebok"]