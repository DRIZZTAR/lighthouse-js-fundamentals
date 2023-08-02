function judgeVegetable(vegetables, metric) {
  // declare variables to store the best submitter and value
  let bestSubmitter = "";
  let bestValue = -1;
  // loop over the array of vegetables
  for (let vegetable of vegetables) {
    // get the current value of the metric
    let currentValue = vegetable[metric];
    // compare it with the best value
    if (currentValue > bestValue) {
      // update the best value and submitter
      bestValue = currentValue;
      bestSubmitter = vegetable.submitter;
    }
  }
  // return the best submitter
  return bestSubmitter;
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)