let hourEL = document.getElementById("hour")
let minuteEL = document.getElementById("minute")
let secondEL = document.getElementById("second")
let shamEL = document.getElementById("sham")
let miliEL = document.getElementById("mili")
function showtime(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let mili = date.getMilliseconds();
    let sham = "AM";
    if(hour == 0){
        hour = 12;
    }
    if(hour>12){
        hour = hour-12;
        sham = "PM";
    }
    
    hourEL.innerText = formatTime(hour);
    minuteEL.innerText = formatTime(minute);
    secondEL.innerText = formatTime(second);
    miliEL.innerText = formatTime(mili);
    shamEL.innerText = sham;
    setTimeout(showtime, 10); 
}

//function to add a 0 in a single digit number

function formatTime(time) {
	return time < 10 ? ( `0${time}` ) : time;
}
showtime();


