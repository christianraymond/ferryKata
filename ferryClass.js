module.exports = function() {
  var FerryClass = function(car, passengers) {
    this.car = car;
    this.passengers = passengers;
  }

  this.onBoard = function(){
  var store = [];
  var countCars = Math.floor(Math.random() * 30) + 1;
  for (var x = 0; x <= countCars; x++) {
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
