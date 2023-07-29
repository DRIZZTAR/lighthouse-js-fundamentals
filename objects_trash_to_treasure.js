// Define a function called smartGarbage
function smartGarbage(trash, bins) {
  // Use an if-else statement to check the value of trash
  if (trash === "waste") {
    // Increment the waste property of bins by one
    bins.waste++;
  } else if (trash === "recycling") {
    // Increment the recycling property of bins by one
    bins.recycling++;
  } else if (trash === "compost") {
    // Increment the compost property of bins by one
    bins.compost++;
  }
  // Return the updated bins object
  return bins;
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });