//Simple Arrow function
const add=(a,b)=>a+b;
console.log('Sum:', add(3,6));

//Arrow function with no parameter
const greet=()=>console.log('Hello, World!');
greet();

//Arrow function with single parameter
const greetName = name => "Hello, "+name +"!";
console.log(greetName('Kanishk'));

//Arrow function with multiple parameters
const multiply=(a,b)=>a*b;
console.log('Product:', multiply(3,6));

//Arrow function with block body
const divide=(a,b)=>{
    if(b===0){
        return 'Cannot divide by zero';
    }
    return a/b;
}
console.log('Division:', divide(6,3));
console.log('Division:', divide(6,0));

//Arrow function with default parameters
const power=(base, exponent=2)=>Math.pow(base, exponent);
console.log('Power:', power(3));    
console.log('Power:', power(3, 3));

//Arrow Function with Multiple Lines
const factorial = n => {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log('Factorial:', factorial(5));