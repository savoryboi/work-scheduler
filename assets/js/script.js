var currentDayEl = document.querySelector('#currentDay')
currentDayEl.innerText = moment().format('LL');
var blockTimeArray = [8, 9, 10, 11, 12, 13, 14, 15, 16];
var timeBlockEls = document.querySelectorAll('.time-block');
var currentHour = moment().hour();

var hour8 = document.querySelector('#hour8');
var hour9 = document.querySelector('#hour9');
var hour13 = document.querySelector('#hour10');
var hour11 = document.querySelector('#hour11');
var hour12 = document.querySelector('#hour12');
var hour13 = document.querySelector('#hour13');
var hour14 = document.querySelector('#hour14');
var hour15 = document.querySelector('#hour15');
var hour16 = document.querySelector('#hour16');

console.log(currentHour)
function setTimeBlock() {

}  






function colorCode() {

}
setTimeBlock();