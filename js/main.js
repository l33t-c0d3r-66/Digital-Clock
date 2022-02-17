var time = document.getElementById("time");
var meridium = document.getElementById("meridium");
const body = document.querySelector("body");

var tempMin = 0;

setInterval(function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if(tempMin!=minutes) {
        randomBackgroundColor();
        tempMin = minutes;
    }

    if(hours > 12) {
        meridium.innerText = "PM";
        hours = hours -12 ;
    } else {
        meridium.innerText = "AM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    

    var timeOnScreen = hours + ":" + minutes + ":" + seconds;
    time.innerText = timeOnScreen;
} ,10);


function randomBackgroundColor() {
    let hex = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e'];
    let a;

    //Function to generate random color
    function populate(a) {
        for (let i = 0; i < 6; i++) {
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let color = populate("#");
    body.style.background = color;
}

