// Define a function called concat
function concat(array1, array2) {
  // Use the concat method to concatenate the arrays
  return array1.concat(array2);
}

// Test the function with some examples
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]); // [ 1, 2, 3, 4, 5, 6 ] =? [ 1, 2, 3, 4, 5, 6 ]
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]); // [ 0, 3, 1, 9, 7, 2 ] =? [ 0, 3, 1, 9, 7, 2 ]
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]); // [ 9, 7, 2 ] =? [ 9, 7, 2 ]