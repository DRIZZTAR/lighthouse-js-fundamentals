const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  // Create an empty array to store the names of appropriate stations
  let goodStations = [];
  // Loop through the stations array
  for (let station of stations) {
    // Get the name, capacity and venue type of each station
    let name = station[0];
    let capacity = station[1];
    let type = station[2];
    // Check if the capacity is at least 20 and the type is school or community centre
    if (capacity >= 20 && (type === "school" || type === "community centre")) {
      // If yes, push the name to the goodStations array
      goodStations.push(name);
    }
  }
  // Return the goodStations array
  return goodStations;
}
