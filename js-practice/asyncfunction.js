// 1. Define the functions first
function orderCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("☕ Espresso is ready!");
        }, 1000); // Simulates 1 second delay
    });
}

function orderSandwich() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("🥪 Club Sandwich is ready!");
        }, 1000);
    });
}

function orderDonut() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("🍩 Glazed Donut is ready!");
        }, 1000);
    });
}

function getBill() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("💵 Your total is $12.50. Thank you!");
        }, 500);
    });
}

//Async function 

async function placeOrder(){
    let coffee = await orderCoffee();
    console.log(coffee);
    let sandwich = await orderSandwich();
    console.log(sandwich);
    let donut = await orderDonut();
    console.log(donut);
    let bill = await getBill();
    console.log(bill);
}

placeOrder();