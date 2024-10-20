// 1. Ask the user to enter a price tag
let price = prompt("Enter the price tag:");

// 2. Convert the input from string to number
let priceNumber = parseFloat(price);

// 3. Reduce the price by 10 percent
let discountedPrice = priceNumber * 0.9;

// 4. Print out the new price
console.log("New price: $" + discountedPrice.toFixed(2));
alert("New price: $" + discountedPrice.toFixed(2));
