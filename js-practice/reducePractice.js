let numbers = [1,2,3,4,5];

let sum = numbers.reduce((acc,num) => acc+num,0)
console.log(sum) // Output: 15


let results = ['pass','fail','pass','pass','fail'];
let passCount = results.reduce((acc,r) => r === 'pass' ? acc + 1 : acc, 0);
console.log(passCount); // Output: 3