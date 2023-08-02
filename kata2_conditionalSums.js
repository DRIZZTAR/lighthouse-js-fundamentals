// Define a function named conditionalSum
function conditionalSum(values, condition) {
  // Initialize a variable to store the sum
  let sum = 0;
  // Loop through the values array
  for (let value of values) {

    // Check if the value is odd or even
    let isOdd = value % 2 === 1;
    let isEven = value % 2 === 0;

    // Add the value to the sum if it matches the condition
    if (condition === "odd" && isOdd) {
      sum += value;
    } else if (condition === "even" && isEven) {
      sum += value;
    }
  }
  return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));