// setintercal (function,time)

// declare
let sec = 0;
let min = 0;
let hrs = 0;
let uid;

// get 
let seconds = document.querySelector("#seconds");
let minutes = document.querySelector("#minutes");
let hours = document.querySelector("#hours");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

// counter functions
function counter() {
    sec++;
    if (sec === 60) {
        min++;
        sec = 0;
        if (min === 60) {
            hrs++;
            min = 0;
        }
    }
    // if(count>= 5){
    //     clearInterval(uid)
    // }
    if(sec<10){
        seconds.innerText = "0" + sec
    }else{
        seconds.innerText = sec
    }
    if(min<10){
        minutes.innerText = "0" +  min
    }else{
        minutes.innerText = min
    }
    if(hrs<10){
        hours.innerText = "0" +  hrs
    }else{
        hours.innerText = hrs
    }
    start.setAttribute("disabled", "disabled");
    stop.removeAttribute("disabled", "disabled");
}

// fort start button create function
function counterStart() {
    uid = setInterval(counter, 1000);
}

// fort stop button create function
function counterStop() {
    clearInterval(uid);

    start.removeAttribute("disabled", "disabled");
    stop.setAttribute("disabled", "disabled");
}

// fort reset button create function
function counterReset() {
     sec = 0;
     min = 0;
     hrs = 0;
    clearInterval(uid);
    seconds.innerText = "00";
    minutes.innerText = "00";
    hours.innerText = "00";
}
