const instructorWithLongestName = function(instructors) {
  // Initialize a variable to store the longest name length
  let longest = 0;
  // Loop through the array of instructors
  for (let i = 0; i < instructors.length; i++) {
    // Compare the length of the current element with the longest name
    if (instructors[i].name.length > instructors[longest].name.length) {
      longest = i;
    }
  }
  return instructors[longest];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));