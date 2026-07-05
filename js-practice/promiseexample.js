function orderCoffee(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("☕ Espresso is ready!");
        }, 1000); // Simulates 1 second delay
    });
}

function orderSandwich(){
    return new Promise((resolve,reject) =>{
        setTimeout (() => {
            resolve("🥪 Club Sandwich is ready!");
        }, 2000); // Simulates 2 second delay
    })
}

function orderDonut(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("🍩 Glazed Donut is ready!");
        }, 3000); // Simulates 3 second delay
    })
}

function getBill(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("💵 Your total is $12.50. Thank you!");
        },2000); // Simulates 2 second delay
    })
}

orderCoffee()
    .then((coffee) => {
        console.log(coffee);
        return orderSandwich();
    })
    .then((sandwich) => {
        console.log(sandwich);
        return orderDonut();
    })
    .then((donut) => {
        console.log(donut);
        return getBill();
    })
    .then((bill) => {
        console.log(bill);
    })
    .catch((error) => {
        console.error("Error:", error);
    });