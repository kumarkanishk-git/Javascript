// Example of using a Promise with async/await
function fetchDataFromServer(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulate success or failure
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 5000); // Simulates 5 second delay
    });
}

// Using async/await to handle the promise
async function processData() {
    try {
        console.log("Fetching data from server...");
        const result = await fetchDataFromServer();
        console.log(result);
        // Further processing of the data can be done here
    } catch (error) {
        console.error(error);
    }
}

processData();