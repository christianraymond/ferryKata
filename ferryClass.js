var CarClass = require('./carClass');
FerryClass = function(car, passengers) {
  this.car = car;
  this.passengers = passengers;
}

var carsInstance = [];
for (var x = 1; x <= 20; x++) {
  var result = carsInstance.push(x)
}
if (carsInstance.length >= 20) {
  console.log("Rejected!");
} else {
  console.log("Accepted!");
}

var ferryInstances = new FerryClass(20, 40);
console.log("There are " + ferryInstances.car + " cars and " + ferryInstances.passengers + " passengers in the Ferry!");
