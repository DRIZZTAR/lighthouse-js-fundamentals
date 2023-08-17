const repeatNumbers = function(data) {
  let result = "";
  
  for (let i = 0; i < data.length; i++) {
    const subArray = data[i];
    const number = subArray[0];
    const repeatCount = subArray[1];
  
    for (let j = 0; j < repeatCount; j++) {
      result += number;
    }
  
    if (i < data.length - 1) {
      result += ", ";
    }
  }
  
  return result;
};
  
console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log( 
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
  