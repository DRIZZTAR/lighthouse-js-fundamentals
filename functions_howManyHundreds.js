// Define a function called howManyHundreds
function howManyHundreds(num) {
  //Return how many hundreds fit into that number
  return Math.floor(num / 100);
}

// Verification code checks

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(900), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);