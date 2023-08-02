const numberOfVowels = function(data) {
let vowelList = ['a','e','i','o','u'];
let count = 0

for (let vowel of data) {
  if(vowelList.includes(vowel)) {
    count++;
  }
}
return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));