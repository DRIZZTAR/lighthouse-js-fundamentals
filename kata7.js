const checkAir = function (samples, threshold) {
 // Initialize a variable to count the number of dirty samples
 let dirtyCount = 0;
 for (let sample of samples) {
   if (sample === 'dirty') {
     dirtyCount++;
   }
 }
 // Calculate the proportion of dirty samples
 let dirtyRatio = dirtyCount / samples.length;
 
 // Compare the dirtyRatio with the threshold and return the appropriate result
 if (dirtyRatio > threshold) {
   return 'Polluted';
 } else {
   return 'Clean';
 }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))