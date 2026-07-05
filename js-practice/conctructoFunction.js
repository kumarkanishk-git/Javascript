function Person(name,age){
    this.name = name;
    this.age = age;
}

const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);
console.log(person1); // Person { name: 'John', age: 30 }
console.log(person2); // Person { name: 'Jane', age: 25 }
console.log(person1.name); // John
console.log(person1.age); // 30