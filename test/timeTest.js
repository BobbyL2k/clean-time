/*jshint esversion:6*/

const assert = require('assert');
const time = require('./../lib/time');

describe('time', function () {
    describe('single method call', function () {
        describe('second', function () {
            it('should return correct time with input 1', function () {
                var value = 1000;
                assert.strictEqual(time(1).seconds(), value);
                assert.strictEqual(time(1).second(), value);
            });
            it('should return correct time corresponding to the input', function () {
                var value = 1000;
                var random = Math.random()*30;
                assert.strictEqual(time(random).seconds(), value*random);
                assert.strictEqual(time(random).second(), value*random);
            });
        });
        describe('minute', function () {
            it('should return correct time with input 1', function () {
                var value = 1000 * 60;
                assert.strictEqual(time(1).minutes(), value);
                assert.strictEqual(time(1).minute(), value);
            });
            it('should return correct time corresponding to the input', function () {
                var value = 1000 * 60;
                var random = Math.random()*30;
                assert.strictEqual(time(random).minutes(), value*random);
                assert.strictEqual(time(random).minute(), value*random);
            });
        });
        describe('hour', function () {
            it('should return correct time with input 1', function () {
                var value = 1000 * 60 * 60;
                assert.strictEqual(time(1).hours(), value);
                assert.strictEqual(time(1).hour(), value);
            });
            it('should return correct time corresponding to the input', function () {
                var value = 1000 * 60 * 60;
                var random = Math.random()*30;
                assert.strictEqual(time(random).hours(), value*random);
                assert.strictEqual(time(random).hour(), value*random);
            });
        });
        describe('day', function () {
            it('should return correct time with input 1', function () {
                var value = 1000 * 60 * 60 * 24;
                assert.strictEqual(time(1).days(), value);
                assert.strictEqual(time(1).day(), value);
            });
            it('should return correct time corresponding to the input', function () {
                var value = 1000 * 60 * 60 * 24;
                var random = Math.random()*30;
                assert.strictEqual(time(random).days(), value*random);
                assert.strictEqual(time(random).day(), value*random);
            });
        });
        describe('random', function () {
            it('should return correct time with input 1', function () {
                var value = 1000 * 60 * 60 * 24 * 7;
                assert.strictEqual(time(1).weeks(), value);
                assert.strictEqual(time(1).week(), value);
            });
            it('should return correct time corresponding to the input', function () {
                var value = 1000 * 60 * 60 * 24 * 7;
                var random = Math.random()*30;
                assert.strictEqual(time(random).weeks(), value*random);
                assert.strictEqual(time(random).week(), value*random);
            });
        });
        describe('month', function () {
            it('should return correct time with input 1', function () {
                var value = 1000 * 60 * 60 * 24 * 30;
                assert.strictEqual(time(1).months(), value);
                assert.strictEqual(time(1).month(), value);
            });
            it('should return correct time corresponding to the input', function () {
                var value = 1000 * 60 * 60 * 24 * 30;
                var random = Math.random()*30;
                assert.strictEqual(time(random).months(), value*random);
                assert.strictEqual(time(random).month(), value*random);
            });
        });
        describe('year', function () {
            it('should return correct time with input 1', function () {
                var value = 1000 * 60 * 60 * 24 * 365;
                assert.strictEqual(time(1).years(), value);
                assert.strictEqual(time(1).year(), value);
            });
            it('should return correct time corresponding to the input', function () {
                var value = 1000 * 60 * 60 * 24 * 365;
                var random = Math.random()*30;
                assert.strictEqual(time(random).years(), value*random);
                assert.strictEqual(time(random).year(), value*random);
            });
        });
    });
    describe('multiple method call', function () {
        it('should add up the time', function () {
            var sum = time(1).hour() + time(5).minutes();
            assert.strictEqual(time(1).hour(5).minutes(), sum);
            var sum2 = time(1).hour() + time(5).hours();
            assert.strictEqual(time(1).hour(5).hours(), sum2);
        });
    });
});
