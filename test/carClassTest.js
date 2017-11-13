var chai = require('chai');
var assert = chai.assert;
var CarClass = require('../carClass');
var Car = CarClass();

describe('The Car class constructor', function() {
  it('should specify the color and the number of passengers in the car.', function() {
    var newCarInstance = new Car("White", 11, "CA 321");
    console.log(newCarInstance);
    assert.deepEqual(newCarInstance, { color: 'White', passengers: 11, regCar: 'CA 321' })
  })
})
