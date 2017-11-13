//should specify the color and the number of passengers in the car
module.exports = function(){
var CarClass = function(color, passengers, regCar){
    this.color = color;
    this.passengers = passengers;
    this.regCar = regCar;
  }
  return CarClass;
}
