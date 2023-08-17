const camelCase = function (input) {
  const wordsArray = input.split(' ');

  for (let i = 1; i < wordsArray.length; i++) {
    wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].substring(1);
  }
  const camelCase = wordsArray.join('');

  return camelCase
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));