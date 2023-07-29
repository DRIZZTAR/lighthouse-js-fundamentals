const finalPosition = function (moves) {
  // Initialize the position array with [0, 0]
  let position = [0, 0];
  // Loop through the moves array
  for (let move of moves) {
    // Update the position according to the move
    switch (move) {
    case 'north':
      position[1]++; // Increase the y-coordinate by 1
      break;
    case 'south':
      position[1]--; // Decrease the y-coordinate by 1
      break;
    case 'west':
      position[0]--; // Decrease the x-coordinate by 1
      break;
    case 'east':
      position[0]++; // Increase the x-coordinate by 1
      break;
    }
  }
  // Return the final position
  return position;
};