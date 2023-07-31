let number = document.getElementById("number");
let hourAnswer = document.getElementById("hourAnswer");
let minuteAnswer = document.getElementById("minutesAnswer");
let secondsAnswer = document.getElementById("secondsAnswer");

function hour() {
    let numValue = parseFloat(number.value);
    let hourValue = numValue * 1;
    hourAnswer.innerHTML = "Hour/s: " + hourValue;

    let minuteValue = numValue * 60;
    minuteAnswer.innerHTML = "Minutes: " + minuteValue;

    let secondsValue = numValue * 3600;
    secondsAnswer.innerHTML = "Seconds: " + secondsValue;
}

function minutes() {
    let numValue = parseFloat(number.value);
    let hourValue = numValue / 60;
    hourAnswer.innerHTML = "Hour/s: " + hourValue;

    let minuteValue = numValue * 1;
    minuteAnswer.innerHTML = "Minutes: " + minuteValue;

    let secondsValue = numValue * 60;
    secondsAnswer.innerHTML = "Seconds: " + secondsValue;
}

function seconds() {
    let numValue = parseFloat(number.value);
    let hourValue = numValue / 3600;
    hourAnswer.innerHTML = "Hour/s: " + hourValue;

    let minuteValue = numValue / 60;
    minuteAnswer.innerHTML = "Minutes: " + minuteValue;

    let secondsValue = numValue * 1;
    secondsAnswer.innerHTML = "Seconds: " + secondsValue;
}