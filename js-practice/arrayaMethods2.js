// Example of using the concat() method to merge two arrays
let fruits = ["apple", "banana"];
let moreFruits = ["orange", "kiwi"];
let allFruits = fruits.concat(moreFruits);  
console.log(allFruits);  // Output: ["apple", "banana", "orange", "kiwi"]

// Example of using the indexOf() method to find the index of an element in an array
let index = allFruits.indexOf("kiwi");
console.log(index);  // Output: 3
let notFoundIndex = allFruits.indexOf("grape");
console.log(notFoundIndex);  // Output: -1

// Example of using the includes() method to check if an array contains a specific element
let hasBanana = allFruits.includes("banana");
console.log(hasBanana);  // Output: true
let hasGrape = allFruits.includes("grape");
console.log(hasGrape);  // Output: false

// Example of using the reverse() method to reverse the order of elements in an array
let reversedFruits = allFruits.reverse();
console.log(reversedFruits);  // Output: ["kiwi", "orange", "banana", "apple"]  

// Example of using the sort() method to sort the elements of an array
let sortedFruits = allFruits.sort();
console.log(sortedFruits);  // Output: ["apple", "banana", "kiwi", "orange"]

let numbers = [100, 20, 30, 15];
let sortedNumbers = numbers.sort();
console.log(sortedNumbers);  // Output: [15, 20, 30, 100]

let items = [100, "banana", 30, "apple", 20];
let sortedItems = items.sort();
console.log(sortedItems);  // Output: [100, 20, 30, "apple", "banana"]