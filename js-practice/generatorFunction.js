function * generatorfunction(){
    yield 'Hello';
    yield 'World';
    yield '!';
}

const iterator = generatorfunction();
console.log(iterator.next().value);// Hello
console.log(iterator.next().value);// World
console.log(iterator.next().value); // !

//Example of using generator function
function * squareGenerator(n){
    for(let i=1; i<=n; i++){
        yield i*i;
    }
}

const squareIterator = squareGenerator(5);
console.log(squareIterator.next().value); // 1
console.log(squareIterator.next().value); // 4
console.log(squareIterator.next().value); // 9
console.log(squareIterator.next().value); // 16
console.log(squareIterator.next().value); // 25 
console.log(squareIterator.next().done); // true