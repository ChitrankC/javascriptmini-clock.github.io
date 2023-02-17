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
    hour = (hour<10)? "0" + hour: hour;
    minute = (minute<10)? "0" + minute: minute;
    second = (second<10)? "0" + second: second;
    mili = (mili<10)? "0" + mili: mili;
    hourEL.innerText = hour;
    minuteEL.innerText = minute;
    secondEL.innerText = second;
    miliEL.innerText = mili;
    shamEL.innerText = sham;
    setTimeout(showtime, 10); 
}
showtime();


