var currentDayEl = document.querySelector('#currentDay')
currentDayEl.innerText = moment().format('LL');
var blockTimeArray = [8, 9, 10, 11, 12, 13, 14, 15, 16]
var currentHour = moment().hour();

console.log(currentHour)
function setTimeBlock() {
    for(i=0; i<blockTimeArray.length; i++)
    var blockTime = blockTimeArray[i];
}






function colorCode() {

}
setTimeBlock();