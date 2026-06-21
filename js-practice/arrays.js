let colors = ["red", "green", "blue"];
let colorscolor = ["red", "green", 12];
console.log(colors);  // Output: ["red", "green", "blue"]
console.log(colors[0]);  // Output: red
console.log(colors.length);  // Output: 3
console.log(typeof colors);  // Output: object

console.log(colorscolor);  // Output: ["red", "green", 12]
colors.push("yellow");
console.log(colors);  // Output: ["red", "green", "blue", "yellow"]
colors.pop();
console.log(colors);