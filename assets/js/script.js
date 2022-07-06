var currentDayEl = document.querySelector('#currentDay')
currentDayEl.innerText = moment().format('LL');
var timeBlockArray = [8, 9, 10, 11, 12, 13, 14, 15, 16];
var currentHour = moment().hour();
var timeBlockEls = document.querySelectorAll('.time-block')
var hourBlockArray = [hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16];
var saveBtns = document.querySelector('.saveBtn');

// grab each timeblock element for future reference
var hour8 = document.querySelector('#hour8');
var hour9 = document.querySelector('#hour9');
var hour10 = document.querySelector('#hour10');
var hour11 = document.querySelector('#hour11');
var hour12 = document.querySelector('#hour12');
var hour13 = document.querySelector('#hour13');
var hour14 = document.querySelector('#hour14');
var hour15 = document.querySelector('#hour15');
var hour16 = document.querySelector('#hour16');


function setTimeBlock() {
   
    timeBlockEls.forEach((item)=>{
        if(item.dataset.hour < currentHour){
            item.classList.add('past');
            item.classList.remove('present');
            item.classList.remove('future');
        } else if(item.dataset.hour == currentHour){
            item.classList.add('present');
            item.classList.remove('past');
            item.classList.remove('future');
        } else if(item.dataset.hour > currentHour){
            item.classList.add('future');
            item.classList.remove('past');
            item.classList.remove('present');
        }
        
    })  

}

setTimeBlock();

saveBtns.addEventListener('click', function() {

})