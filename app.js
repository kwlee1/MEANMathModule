var math = require('./mathlib')();

const a = 1;
const b = 35;

console.log("\nSum of " + a + " and " + b + " is: ", math.add(a, b));
console.log("Product of " + a + " and " + b + " is: ", math.multiply(a, b));
console.log("Square of " + a + " is: ", math.square(a));
console.log("Random number between " + a + " and " + b + ": ", math.random(a, b));