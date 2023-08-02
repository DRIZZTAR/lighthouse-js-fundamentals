function carPassing(cars, speed) {
  // create a new object with speed and time properties
  let newCar = {
    speed: speed,
    time: Date.now()
  };
  // add the new object to the cars array
  cars.push(newCar);
  // return the updated array
  return cars;
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars, speed)