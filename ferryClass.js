module.exports = function() {
  var FerryClass = function(cars, passengers) {
    this.cars = cars;
    this.passengers = passengers;
  }

  board = function() {
    //add cars in the ferry using board method
    var carsData = {
      Model: 'Chevrolet',
      Reg: 'CA 123',
      Color: 'Gray',
      AmountOfCars: Math.floor(Math.random() * 100) + 1 + ' Cars.'
    }
    for (var key in carsData) {
      if (carsData.hasOwnProperty(key)) {
        console.log(key + ' => ' + carsData[key])
      }
    }
    //check if the amount of cars ecceed certain amoun and display REJECTED&&Acepted.
    var store = [];
    var AmountOfCars = Math.floor(Math.random() * 100) + 1;
    for (var x = 0; x <= AmountOfCars; x++) {
      var result = store.push(x)
    }
    if (result >= 21) {
      console.log("REJECTED!")
    } else {
      console.log("Acepted!")
    }
  }
  return FerryClass;
}
