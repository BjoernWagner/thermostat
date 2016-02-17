describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('gets the current temperature', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('raises current temperature', function() {
      thermostat.turnUp();
      expect(thermostat.temperature).toEqual(21);
    });

    it('decreases current temperature', function(){
      thermostat.turnDown();
      expect(thermostat.temperature).toEqual(19);
    });

    it('Temperature cannot be decreased below 10', function() {
      for(i=0; i<10; i++) {
      thermostat.turnDown();
      }
      expect(function() { thermostat.turnDown()}).toThrowError('Temperature cannot be below 10 degrees');
    });

    it('resets the temperature to 20 degrees', function(){
      for(i=0; i<5; i++) {
      thermostat.turnDown();
      }
      thermostat.tempReset();
      expect(thermostat.temperature).toEqual(20);
    });

    it('Energy usage is green below 18', function() {
      for(i=0; i<3; i++) {
      thermostat.turnDown();
      }
      expect(thermostat.energyUsage).toEqual('green');
    });

      describe('when in PSM', function(){

          it('can be turned off', function() {
            thermostat.changePowerSavingMode();
            expect(thermostat.powerSavingMode).toBe(false);
          });

          it('Temperature cannot be increased above 25', function() {
            for(i=0; i<5; i++) {
              thermostat.turnUp();
            }
            expect(function() { thermostat.turnUp()}).toThrowError('Temperature cannot go over 25 degrees');
          });

      });

      describe('when PSM off', function(){

        beforeEach(function() {
          thermostat.changePowerSavingMode();
        })

          it('Temperature cannot be increased above 32', function() {

              for(i=0; i<12; i++) {
                thermostat.turnUp();
              }
              expect(function() { thermostat.turnUp()}).toThrowError('Temperature cannot go over 32 degrees');
          });

      });

});









