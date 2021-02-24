'use strict';

class Thermostat {
  constructor(temp = 20) {
    this.temp = temp
    this.powerSavingMode = true
    this.minimumTemperature = 10
  };
  
  temperature() {
    return this.temp
  };

  up() {
    this.temp += 1;
  }

  down() {
    this.temp -= 1;
  }
};