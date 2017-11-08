var chai = require('chai');
var assert = chai.assert;
var CarClass = require('../carClass');

describe('The Car class constructor', function(){
  it('should specify the color and the number of passengers in the car.', function(){
    assert.equal(CarClass('whiteColor', 10))
  })
})
