//should specify the color and the number of passengers in the car
var CarClass = function(color, passengers){
    this.color = color;
    this.passengers = passengers;
  }
var newCar = new CarClass('White', 10);
console.log("There is a " + newCar.color + " car caring " + newCar.passengers + " passengers!");
