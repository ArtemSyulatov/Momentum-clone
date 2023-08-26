
const time = document.querySelector('.time')
const monthAndDay = document.querySelector('.date')

function showTime(){
const date = new Date()
const currentTime = date.toLocaleTimeString()
time.innerHTML = currentTime;
setTimeout(showTime,1000) 
} 

function showDate(){
    const date = new Date()
    const options = {weekday: 'long',month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric',};
    const currentDate = date.toLocaleDateString('en-EN',options);
    monthAndDay.innerHTML = currentDate;  
} 
showTime(showDate())


