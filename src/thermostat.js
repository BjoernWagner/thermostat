function Thermostat(){
  this.energyUsage = 'yellow'
  this.temperature = 20
  this.powerSavingMode = true;
  MINTEMPERATURE = 10
  MAXTEMPWITHPSMON = 25
  MAXTEMPWITHPSMOFF = 32
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature
};

Thermostat.prototype.turnUp = function() {
  if(this.powerSavingMode === true) 
    this._turnUpWithPSMOn() 
  else 
    this._turnUpWithPSMOff() 
  this._energyUsageColor();
};

Thermostat.prototype.turnDown = function() {
  if(this.temperature <= MINTEMPERATURE)
    {throw new Error('Temperature cannot be below 10 degrees')};
  this.temperature --;
  this._energyUsageColor();
};

Thermostat.prototype.changePowerSavingMode = function() {
  if(this.powerSavingMode === false){
   return this.powerSavingMode = true;}
  else {
  return this.powerSavingMode = false;}
};

Thermostat.prototype.tempReset = function() {
  this.temperature = 20;
  this._energyUsageColor();
};

Thermostat.prototype._turnUpWithPSMOn = function() {
  if (this.temperature < MAXTEMPWITHPSMON)
      this.temperature ++;
    else
      {throw new Error('Temperature cannot go over ' + MAXTEMPWITHPSMON + ' degrees')};
};

Thermostat.prototype._turnUpWithPSMOff = function() {
  if (this.temperature < MAXTEMPWITHPSMOFF)
      this.temperature ++;
    else
      {throw new Error('Temperature cannot go over ' + MAXTEMPWITHPSMOFF + ' degrees')};
};

Thermostat.prototype._energyUsageColor = function() {
  if (this.temperature < 18)
    this.energyUsage = 'green';
  else if ((this.temperature > 17) && (this.temperature < 25))
    this.energyUsage = 'yellow';
  else
    this.energyUsage = 'red';
};
