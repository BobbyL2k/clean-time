/*jshint esversion:6*/

(function(){
    'use strict';

    var constants = {};
    constants.seconds = 1000;
    constants.minutes = 60 * constants.seconds;
    constants.hours = 60 * constants.minutes;
    constants.days = 24 * constants.hours;
    constants.weeks = 7 * constants.days;
    constants.months = 30 * constants.days;
    constants.years = 365 * constants.days;

    class _ct_time{
        constructor(l_in){
            this.l_in = l_in || 0;
            this.p_time = 0;
            this.and = this;
        }
        year(){ return this.years(arguments[0]); }
        years(input){
            this.p_time += this.l_in * constants.years;
            return this._r(input);
        }
        month(){ return this.months(arguments[0]); }
        months(input){
            this.p_time += this.l_in * constants.months;
            return this._r(input);
        }
        week(){ return this.weeks(arguments[0]); }
        weeks(input){
            this.p_time += this.l_in * constants.weeks;
            return this._r(input);
        }
        day(){ return this.days(arguments[0]); }
        days(input){
            this.p_time += this.l_in * constants.days;
            return this._r(input);
        }
        hour(){ return this.hours(arguments[0]); }
        hours(input){
            this.p_time += this.l_in * constants.hours;
            return this._r(input);
        }
        minute(){ return this.minutes(arguments[0]); }
        minutes(input){
            this.p_time += this.l_in * constants.minutes;
            return this._r(input);
        }
        second(){ return this.seconds(arguments[0]); }
        seconds(input){
            this.p_time += this.l_in * constants.seconds;
            return this._r(input);
        }
        ms(input){
            this.p_time += this.l_in;
            return this._r(input);
        }
        _r(input){
            if(input !== undefined){
                this.l_in = input; return this;
            }
            return this.p_time;
        }
    }

    function time(value) {
        return new _ct_time(value);
    }

    module.exports = time;

})();
