let colors = ["red", "green", "blue"];

//Traditional for loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//Modern for loop
for(let i of colors) {
    console.log(i);
}
//forEach loop
colors.forEach(function(color) {
    console.log(color);
});
//Arrow function
colors.forEach((color) => {
    console.log(color);
});
//for in loop
for (let i in colors) {
    console.log(colors[i]);
}