let number = [1,2,3,4,5];

//Using map to create a new array with each element multiplied by 2
let doubled = number.map(num =>num*2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]


let usernames = ['user1','user2']
let testUsers = usernames.map(u=>({username:u,password:"Test@123"}));
console.log(testUsers);