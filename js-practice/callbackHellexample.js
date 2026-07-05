/*“Once I get coffee, I want a sandwich.
 Once I get that, I want a donut.
 Then give me the bill.”
*/
// 1. Define the functions first
function orderCoffee(callback) {
    setTimeout(() => {
        callback("☕ Espresso is ready!");
    }, 1000); // Simulates 1 second delay
}

function orderSandwich(callback) {
    setTimeout(() => {
        callback("🥪 Club Sandwich is ready!");
    }, 1000);
}

function orderDonut(callback) {
    setTimeout(() => {
        callback("🍩 Glazed Donut is ready!");
    }, 1000);
}

function getBill(callback) {
    setTimeout(() => {
        callback("💵 Your total is $12.50. Thank you!");
    }, 500);
}

// 2. Your original execution code (Callback Hell)
orderCoffee((coffee) =>{
    console.log(coffee);
    orderSandwich((sandwich) =>{
        console.log(sandwich);
        orderDonut((donut) =>{
            console.log(donut);
            getBill((bill) =>{
                console.log(bill);
            });   
        });
    });
});