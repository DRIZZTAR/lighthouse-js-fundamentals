const whereCanIPark = function (spots, vehicle) {
  // Loop through each element in the array of arrays
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      // Check if the vehicle type matches the parking spot type
      if (vehicle === "regular") {
        if (spots[y][x] === "R") {
          // Return the coordinates of the parking spot
          return [x, y];
        }
      } else if (vehicle === "small") {
        if (spots[y][x] === "R" || spots[y][x] === "S") {
          // Return the coordinates of the parking spot
          return [x, y];
        }
      } else if (vehicle === "motorcycle") {
        if (spots[y][x] === "R" || spots[y][x] === "S" || spots[y][x] === "M") {
          // Return the coordinates of the parking spot
          return [x, y];
        }
      }
    }
  }

  // If there are no available spots, return false
  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);
