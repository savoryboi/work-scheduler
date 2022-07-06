var currentDayEl = document.querySelector('#currentDay')
currentDayEl.innerText = moment().format('LL');
var currentHour = moment().hour();
var timeBlockEls = document.querySelectorAll('.time-block')
const saveBtns = document.querySelectorAll('.saveBtn');

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

    saveBtns.forEach(saveBtn => {
        $(saveBtn).on('click', function(event){
            event.preventDefault();
            var $userInputEl = $(saveBtn).prev();
            var $userInput = $(saveBtn).prev().val();
            
            localStorage.setItem('user event', $userInput);

            console.log($userInput)

        })
    })




    
