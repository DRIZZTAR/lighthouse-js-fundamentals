// define a function called lastIndexOf
function lastIndexOf(array, value) {
  // create a variable to store the result
  var result = -1;
  // loop through the array from the end to the beginning
  for (var i = array.length - 1; i >= 0; i--) {
    // check if the current element is equal to the value
    if (array[i] === value) {
      // update the result with the current index
      result = i;
      // break out of the loop
      break;
    }
  }
  // return the result
  return result;
}

// test the function with some examples
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);