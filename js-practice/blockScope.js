// if(true){
//     let a = "Inside block";
//     console.log(a);
// }
// console.log(a); // ReferenceError: a is not defined

function testScope(){
    if(true){
        var oldVar = "I am a var"; //function-scoped
        let newLet = "I am a let"; //block-scoped
        const constant = "I am a const"; //block-scoped and cannot be reassigned
    }
    console.log(oldVar); // "I am a var"    
    //console.log(newLet); // ReferenceError: newLet is not defined
    //console.log(constant); // ReferenceError: constant is not defined
}
testScope();