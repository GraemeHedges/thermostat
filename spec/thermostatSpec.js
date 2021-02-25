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
    });
  });

  describe('.down', function() {
    it('decrases the temperature by 1', function(){
      thermostat.down();
      expect(thermostat.temperature()).toEqual(19);
    });

    it('cannot decrease the temperature below 10', function(){
      thermostat = new Thermostat(thermostat.MINIMUM_TEMPERATURE);
      expect(thermostat.temperature()).toEqual(thermostat.MINIMUM_TEMPERATURE);
      thermostat.down()
      expect(thermostat.temperature()).toEqual(thermostat.MINIMUM_TEMPERATURE);
    }); 
  });

  describe('.powerSave', function(){
    it('A new thermostat has power saving on by default', function(){
      expect(thermostat.powerSavingMode).toEqual(true);
    });

    it('A new thermostat has a maximum temperature of 25', function() {
      expect(thermostat.maximumTemperature).toEqual(25);
    });

    it('Power Saving Mode can be toggled off and maximum temp to be 32', function(){
      thermostat.powerSave();
      expect(thermostat.powerSavingMode).toEqual(false);
      expect(thermostat.maximumTemperature).toEqual(32);
    });

    it('Cannot increase temp beyond the maximum', function(){
      thermostat = new Thermostat(thermostat.maximumTemperature);
      thermostat.up();
      expect(thermostat.temp).toEqual(thermostat.maximumTemperature);
    });

    it('Power Saving Mode can be toggled on and maximum temp to be 25', function(){
      thermostat.powerSave();
      expect(thermostat.powerSavingMode).toEqual(false);
      expect(thermostat.maximumTemperature).toEqual(32);
      thermostat.powerSave();
      expect(thermostat.powerSavingMode).toEqual(true);
      expect(thermostat.maximumTemperature).toEqual(25);    
    });
  });

  describe('.reset',function(){
    it('Resets the temperature to 20', function(){
      thermostat = new Thermostat(25);
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    });
  });

  describe('.energyUsage', function(){
    it('Returns low-usage when temp is below 18', function(){
      thermostat = new Thermostat(17);
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('Returns medium-usage when temp equal to or less than 25', function(){
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('Returns high-usage when temp is above 25', function(){
      thermostat.powerSave();
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});
  