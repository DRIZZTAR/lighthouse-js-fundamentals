const amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);

let data = [1,2,3,4];
let name = 'pedro';
for(let character of name){
  console.log(character);
}