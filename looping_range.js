// define a function called range
function range(start, end, step) {
  // create an empty array to store the numbers
  var array = [];
  // check if the parameters are valid
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    // return an empty array if not valid
    return array;
  } else {
    // loop from start to end with the given step
    for (var i = start; i <= end; i += step) {
      // push the current number to the array
      array.push(i);
    }
    // return the array
    return array;
  }
}

// test the function with some examples
console.log(range(0, 10, 2)); // [ 0, 2, 4, 6, 8, 10 ]
console.log(range(10, 30, 5)); // [ 10, 15, 20, 25, 30 ]
console.log(range(-5, 2, 3)); // [ -5, -2, 1 ]