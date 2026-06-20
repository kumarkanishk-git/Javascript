// JavaScript Data Types

// JavaScript has several data types, including:

// 1. String: Represents textual data
let name = "Kanishk";
console.log(name);  // Output: Kanishk
console.log(typeof name);  // Output: string

// 2. Number: Represents both integer and floating-point numbers
let age = 30;
let weight = 67.75;
console.log(age);  // Output: 30
console.log(weight);  // Output: 67.75
console.log(typeof age);  // Output: number
console.log(typeof weight);  // Output: number

// 3. Boolean: Represents a logical value, either true or false
let isStudent = true;
console.log(isStudent);  // Output: true
console.log(typeof isStudent);  // Output: boolean

// 4. Null: Represents the intentional absence of any object value
let car = null;
console.log(car);  // Output: null
console.log(typeof car);  // Output: object (this is a quirk in JavaScript, null is considered an object)

// 5. Undefined: Represents the absence of a value
let undefinedVariable;
console.log(undefinedVariable);  // Output: undefined
console.log(typeof undefinedVariable);  // Output: undefined

// 6. Symbol: Represents a unique identifier
let symbol = Symbol("unique");
console.log(symbol);  // Output: Symbol(unique)
console.log(typeof symbol);  // Output: symbol