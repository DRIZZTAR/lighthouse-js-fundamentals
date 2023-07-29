// Define a function called ageCalculator
function ageCalculator(name, yearOfBirth, currentYear) {
  // Calculate the age by subtracting the year of birth from the current year
  let age = currentYear - yearOfBirth;
  // Return a string with the name and the age
  return name + " is " + age + " years old.";
}

// Test the function with some examples
console.log(ageCalculator("Miranda", 1983, 2015)); // Miranda is 32 years old.
console.log(ageCalculator("Ferdinand", 1988, 2015)); // Ferdinand is 27 years old.