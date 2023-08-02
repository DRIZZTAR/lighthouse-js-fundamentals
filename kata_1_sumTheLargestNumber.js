// Declare a function that takes an array of numbers as an argument
  function sumLargestNumbers(arr) {

  // Init two variables to store the largest and second largest numbers
  let largest = arr[0];
  let secondLargest = arr[1];

  // Loop through the array from the third element onwards
  for (let i = 2; i < arr.length; i++) {

  // Compare each element with the largest and second largest numbers
  if (arr[i] > largest) {

  // Update both variables if the element is larger than the largest number
  secondLargest = largest;
  largest = arr[i];
  } else if (arr[i] > secondLargest) {

  // Update only the second largest number if the element is larger than it but smaller than the largest number
  secondLargest = arr[i];
  }
  }

  // Return the sum of the largest and second largest numbers
  return largest + secondLargest;
  }

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));