var currentDayEl = document.querySelector('#currentDay')
currentDayEl.innerText = moment().format('LL');
var currentHour = moment().hour();
var timeBlockEls = document.querySelectorAll('.time-block')

// loading saved data from local storage and displaying
$("#hour8 .time-block").val(localStorage.getItem("hour8"));
$("#hour9 .time-block").val(localStorage.getItem("hour9"));
$("#hour10 .time-block").val(localStorage.getItem("hour10"));
$("#hour11 .time-block").val(localStorage.getItem("hour11"));
$("#hour12 .time-block").val(localStorage.getItem("hour12"));
$("#hour13 .time-block").val(localStorage.getItem("hour13"));
$("#hour14 .time-block").val(localStorage.getItem("hour14"));
$("#hour15 .time-block").val(localStorage.getItem("hour15"));
$("#hour16 .time-block").val(localStorage.getItem("hour16"));

// evaluate current time and color codes according to what is past, present, or future
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

$('.saveBtn').click(function(event){
    event.preventDefault();
    var $eventTimeBlock = $(this).parent().children('.time-label')
    
    var text = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})


