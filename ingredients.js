const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("Ingredients: ");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

console.log("Ingredients: ");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("Ingredients (backwards): ");
for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}

// print the array elements in reverse order using a while loop
console.log("Ingredients (backwards): ");
let j = ingredients.length - 1; // initialize the index
while (j >= 0) {
  console.log(ingredients[j]); // print the element at the current index
  j--; // decrease the index by one
}