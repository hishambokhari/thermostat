'use strict'

describe('Thermostat', function(){

    var thermostat;

    beforeEach(function(){
        thermostat = new Thermostat();
    });
    it('starts at 20 degrees', function(){
        expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('increases the temperature with up()', function() {
        thermostat.up();
        expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('decreases the temperature with down()', function() {
        thermostat.down();
        expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('minimum temperature reading of 10 degrees with min()', function() {
        for (var i = 0; i < 11; i++) {
            thermostat.down();
        };
        expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

});

