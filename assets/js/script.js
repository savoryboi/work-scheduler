var currentDayEl = document.querySelector('#currentDay')
currentDayEl.innerText = moment().format('LL');
var currentHour = moment().hour();
var timeBlockEls = document.querySelectorAll('.time-block')

// loading saved data from local storage and displaying
$("#hour8").val(localStorage.getItem("8am"));
$("#hour9").val(localStorage.getItem("9am"));
$("#hour10").val(localStorage.getItem("10am"));
$("#hour11").val(localStorage.getItem("11am"));
$("#hour12").val(localStorage.getItem("12pm"));
$("#hour13").val(localStorage.getItem("1pm"));
$("#hour14").val(localStorage.getItem("2pm"));
$("#hour15").val(localStorage.getItem("3pm"));
$("#hour16").val(localStorage.getItem("4pm"));

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


