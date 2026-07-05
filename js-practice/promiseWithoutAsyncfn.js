// Example of using a Promise without async/await
const deliverPackage =() =>{
    return new Promise((resolve, reject) => {
        console.log("Package is on its way...");
        setTimeout(()=>{
            const status = true; // Simulate delivery status
            if(status){
                resolve("Package delivered successfully!");
            }else{
                reject("Package delivery failed.");
            }
        }, 5000); // Simulates 5 second delay
        console.log("Waiting for the package to be delivered...");
    });
}

// Using the promise without async/await
deliverPackage()
.then((message) =>{
    console.log(message);
})
.catch((error) =>{
    console.error(error);
});