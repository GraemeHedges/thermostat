'use strict';

class Thermostat {
  constructor(temp = 20) {
    this.temp = temp
    this.powerSavingMode = true
    this.maximumTemperature = 25
    this.MINIMUM_TEMPERATURE = 10
  };
  
  temperature() {
    return this.temp
  };

  up() {
    this.temp += 1;
  }

  down() {
    if (this.temp === this.MINIMUM_TEMPERATURE) {
      return;
    } else {
    this.temp -= 1;
    }
  };

  powerSave() {
    if (this.powerSavingMode === true) {
      this.powerSavingMode = false;
      this.maximumTemperature = 32;
      console.log("Power Saving mode off") 
    } else {
      this.powerSavingMode = true;
      this.maximumTemperature = 25;
      console.log("Power Saving mode on") 
    }
  }

  reset() {
    this.temp = 20;
  }

  energyUsage() {
    if (this.temp < 18) {
      return 'low-usage';
    } else if (this.temp <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
};