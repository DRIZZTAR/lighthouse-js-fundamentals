// Loop from 100 to 200
for (let number = 100; number <= 200; number++) {
  // Check if the number is a multiple of both 3 and 4
  if (number % 3 === 0 && number % 4 === 0) {
    // Print "LoopyLighthouse" instead of the number
    console.log("LoopyLighthouse");
  }
    // Check if the number is a multiple of only 3
  else if (number % 3 === 0) {
    // Print "Loopy" instead of the number
    console.log("Loopy");
  }
    // Check if the number is a multiple of only 4
  else if (number % 4 === 0) {
        // Print "Lighthouse" instead of the number
    console.log("Lighthouse");
  }
  else {
    // Print the number
    console.log(number);
  }
}