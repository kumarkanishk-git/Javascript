// Function Decleration

function add(a,b){
    return a+b;
}

console.log(add(2,3)); // 5

//Function Expression
const square = function(number){
    return number*number;
};
console.log(square(5)); // 25

//Anonymous Function
setTimeout(function(){
    console.log("Hello World");
}, 2000);   