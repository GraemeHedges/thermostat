'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('A new Thermostat', function() {
    it('starts with a temperature of 20 degree', function() {
      expect(thermostat.temperature()).toEqual(20);
    });
  });

  describe('.up', function() {
    it('increases the temperature by 1', function(){
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21);
    })
  })

  describe('.down', function() {
    it('decrases the temperature by 1', function(){
      thermostat.down();
      expect(thermostat.temperature()).toEqual(19);
    })

    it('cannot decrease the temperature below 10', function(){
      thermostat = new Thermostat(thermostat.MINIMUM_TEMPERATURE);
      expect(thermostat.temperature()).toEqual(thermostat.MINIMUM_TEMPERATURE);
      thermostat.down()
      expect(thermostat.temperature()).toEqual(thermostat.MINIMUM_TEMPERATURE);
    }); 
  });
});
  