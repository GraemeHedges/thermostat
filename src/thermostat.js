'use strict';

class Thermostat {
  constructor(temp = 20) {
    this.temp = temp
    this.powerSavingMode = true
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
      this.temp = 10;
    } else {
    this.temp -= 1;
    }
  };
};