var currentDayEl = document.querySelector('#currentDay')
currentDayEl.innerText = moment().format('LL');
var currentHour = moment().hour();
var timeBlockEls = document.querySelectorAll('.time-block')



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
        var $userInput = $(this).prev().val();
        var $eventTime = $(this).parent().attr("id");
        
        localStorage.setItem('user event', $userInput);
        console.log($userInput);
        console.log($eventTime)
})

