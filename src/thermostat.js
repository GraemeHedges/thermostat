'use strict';

class Thermostat {
  constructor(temp = 20) {
    this.temp = temp;
    this.powerSavingMode = true;
    this.maximumTemperature = 25;
    this.MINIMUM_TEMPERATURE = 10;
    this.DEFAULT_TEMPERATURE = 20;
    this.MAX_LIMIT_POWER_SAVE_ON = 25;
    this.MAX_LIMIT_POWER_SAVE_OFF = 32;
    this.LOWER_LIMIT = 18;
    this.HIGH_LIMIT = 25;
  };
  
  temperature() {
    return this.temp
  };

  up() {
    if (this._isMaxTemp()) {
      return;
    }
    this.temp += 1;
  }

  _isMaxTemp() {
    if (this.isPowerSaveOn() === false) {
      return this.temp === this.MAX_LIMIT_POWER_SAVE_OFF;
    }
    return this.temp === this.MAX_LIMIT_POWER_SAVE_ON;
  }

  down() {
    if (this._isMinTemp()) {
      return;
    }
    this.temp -= 1;
  }

  _isMinTemp() {
    return this.temp === this.MINIMUM_TEMPERATURE;
  }

  powerSaveOff() {
    this.powerSavingMode = false;
    this.maximumTemperature = this.MAX_LIMIT_POWER_SAVE_OFF;
  }

  powerSaveOn() {
    this.powerSavingMode = true;
    this.maximumTemperature = this.MAX_LIMIT_POWER_SAVE_ON;
  }

  isPowerSaveOn() {
    return this.powerSavingMode === true;
  }

  reset() {
    this.temp = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if (this.temp < this.LOWER_LIMIT) {
      return 'low-usage';
    } else if (this.temp <= this.HIGH_LIMIT) {
      return 'medium-usage';
    }
      return 'high-usage';
  }
};