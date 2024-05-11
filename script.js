let [millisecounds, secounds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;
document.getElementById("start-timer").addEventListener("click" , () =>{ 
    if(int !== null) {
    clearInterval(int);
}
    int = setInterval(displayTimer, 10);
});
document.getElementById("pause-timer").addEventListener("click" , () =>{ 
    clearInterval(int);
});
document.getElementById("reset-timer").addEventListener("click" , () =>{ 
    clearInterval(int);
    [millisecounds, secounds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
});
function displayTimer() {
    millisecounds +=10;
    if (millisecounds == 1000) {
        secounds++;
        millisecounds=0;
        if (secounds == 60) {
        minutes++;
        secounds=0;
        if (minutes == 60) {
        hours++;
        minutes=0;
    }
    }
        
    }
    
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = secounds < 10 ? "0" + secounds : secounds;
    let ms = millisecounds < 10 ? "00" + millisecounds : millisecounds >"100" ? + millisecounds : millisecounds;
    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}