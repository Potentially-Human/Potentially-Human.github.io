var intervId; 
var countingTime = 0; 
var time = 0; 
var time2 = 0; 
var timerRunning = false; 
var timerSelected = false; 
var timerSelected2 = false; 
var justSelected = false;
var justSelected2 = false; 
var audioIndex = 0; 
var audioList = ["Void_.mp3", "Windy Hill.mp3"]; 

var justOpenedSelection = false;
var selectionOpen = false; 

function startTimer(t = -1) {
    if (time > 0 && timerRunning == false) {
        if (t != -1) {
            countingTime = t; 
        }
        document.querySelector(".timer-text").style.color = "";
        timerRunning = true; 
        timerSelected = false;
        justSelected = false; 
        timerSelected2 = false; 
        justSelected2 = false; 
        intervId = setInterval(reduceTime, 1000); 
    }
}

function reduceTime() {
    countingTime--;
    updateTimeText();  
    if (countingTime === 0) {
        stopTimer();
        var audio = new Audio("static/assets/" + document.getElementById("selected").innerHTML + ".mp3"); 
        audio.play();
        if (time2 > 0) {
            const c = time; 
            time = time2; 
            time2 = c; 
            countingTime = time;
            setTimeText();
            startTimer();
        } else {
            countingTime = time; 
            setTimeText();
        }
    }
}

function stopTimer() {
    clearInterval(intervId);
    timerRunning = false;
}

function setTimeText(mode = 0) {
    if (mode != 2) {
        var hours = (time - (time % 3600)) / 3600; 
        var minutes = (time % 3600 - time % 60) / 60; 
        var seconds = time % 60; 
        document.querySelector(".timer-text").innerHTML = (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    } 
    if (mode != 1) {
        hours = (time2 - (time2 % 3600)) / 3600; 
        minutes = (time2 % 3600 - time2 % 60) / 60; 
        seconds = time2 % 60; 
        document.querySelector(".second-timer-text").innerHTML = (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
}

function updateTimeText() {
    var hours = (countingTime - (countingTime % 3600)) / 3600; 
    var minutes = (countingTime % 3600 - countingTime % 60) / 60; 
    var seconds = countingTime % 60; 
    document.querySelector(".timer-text").innerHTML = (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

function calcSeconds(s) {
    hours = parseInt(s[0] + s[1]); 
    minutes = parseInt(s[3] + s[4]);
    seconds = parseInt(s[6] + s[7]);
    return Math.min(3600 * hours + 60 * minutes + seconds, 359999); 
}

function changeOption(text) {
    document.getElementById("selected").innerHTML = text; 
}

window.addEventListener("load", (event) => {
    document.querySelector(".start-timer").addEventListener("click", (e) => {
        if (timerSelected) {
            timerSelected = false; 
            document.querySelector(".timer-text").style.color = "";
            setTimeText(1);
            countingTime = time; 
        } else if (timerSelected2) {
            timerSelected2 = false;
            document.querySelector(".second-timer-text").style.color = "";
            setTimeText(2);
        }
        startTimer();
    });
    document.querySelector(".stop-timer").addEventListener("click", (e) => {
        stopTimer();
    });

    window.addEventListener("keydown", (e) => {
        if (parseInt(e.key) || e.key == "0") {
            if (timerSelected) {
                var timeString = document.querySelector(".timer-text").innerHTML;
                var newTimeString = "";
                for (var i = 0; i < timeString.length; i++) {
                    if (i == 0) { continue; }
                    if (timeString[i] != ":") {
                        newTimeString += timeString[i]; 
                        if (i % 3 == 0) {
                            newTimeString += ":";
                        }
                    }
                }
                newTimeString += e.key; 
                document.querySelector(".timer-text").innerHTML = newTimeString;
                time = calcSeconds(newTimeString);
            } else if (timerSelected2) {
                var timeString = document.querySelector(".second-timer-text").innerHTML;
                var newTimeString = "";
                for (var i = 0; i < timeString.length; i++) {
                    if (i == 0) { continue; }
                    if (timeString[i] != ":") {
                        newTimeString += timeString[i]; 
                        if (i % 3 == 0) {
                            newTimeString += ":";
                        }
                    }
                }
                newTimeString += e.key; 
                document.querySelector(".second-timer-text").innerHTML = newTimeString;
                time2 = calcSeconds(newTimeString);
            }
        } else if (e.key == "Backspace") {
            if (timerSelected) {
                var timeString = document.querySelector(".timer-text").innerHTML;
                var newTimeString = "0";
                for (var i = 0; i < timeString.length; i++) {
                    if (i == timeString.length - 1) { continue; }
                    if (timeString[i] != ":") {
                        newTimeString += timeString[i]; 
                        if (i % 3 == 0 && i < 6) {
                            newTimeString += ":";
                        }
                    }
                }
                document.querySelector(".timer-text").innerHTML = newTimeString;
                time = calcSeconds(newTimeString);
            } else if (timerSelected2) {
                var timeString = document.querySelector(".second-timer-text").innerHTML;
                var newTimeString = "0";
                for (var i = 0; i < timeString.length; i++) {
                    if (i == timeString.length - 1) { continue; }
                    if (timeString[i] != ":") {
                        newTimeString += timeString[i]; 
                        if (i % 3 == 0 && i < 6) {
                            newTimeString += ":";
                        }
                    }
                }
                document.querySelector(".second-timer-text").innerHTML = newTimeString;
                time2 = calcSeconds(newTimeString);
            }
        } else if (e.key == "Enter") {
            if (!timerSelected && !timerSelected2) {
                startTimer();
            } else {
                timerSelected = false; 
                timerSelected2 = false;
                document.querySelector(".timer-text").style.color = "";
                document.querySelector(".second-timer-text").style.color = "";
                setTimeText();
                countingTime = time; 
            }
        } else if (e.key == " ") {
            if (timerRunning) {
                stopTimer(); 
            } else {
                if (timerSelected) {
                    setTimeText(1);
                    countingTime = time; 
                } else if (timerSelected2) {
                    setTimeText(2);
                }
                startTimer();
            }
        } else {
            //console.log(e.key); 
        }
    });

    document.querySelector(".timer-text").addEventListener("click", (e) => {
        e.preventDefault();
        if (!timerRunning && !timerSelected) {
            timerSelected = true; 
            justSelected = true; 
            if (timerSelected2) {
                timerSelected2 = false;
                justSelected2 = false; 
                document.querySelector(".second-timer-text").style.color = "";
            }
            document.querySelector(".timer-text").style.color = "gray";
            time = calcSeconds(document.querySelector(".timer-text").innerHTML);
        }
    }); 

    document.querySelector(".second-timer-text").addEventListener("click", (e) => {
        e.preventDefault();
        if (!timerRunning && !timerSelected2) {
            timerSelected2 = true; 
            justSelected2 = true; 
            if (timerSelected) {
                timerSelected = false;
                justSelected = false;
                document.querySelector(".timer-text").style.color = "";
                setTimeText(1);
                countingTime = time; 
            }
            
            document.querySelector(".second-timer-text").style.color = "gray";
        }
    });

    document.querySelector("body").addEventListener("click", (e) => {
        if (timerSelected) {
            if (!justSelected) {
                timerSelected = false; 
                document.querySelector(".timer-text").style.color = "";
                setTimeText(1);
                countingTime = time; 
            } else {
                justSelected = false; 
            }
        }
        if (timerSelected2) {
            if (!justSelected2) {
                timerSelected2 = false; 
                document.querySelector(".second-timer-text").style.color = "";
                setTimeText(2);
            } else {
                justSelected2 = false; 
            }
        }
        if (!justOpenedSelection) {
            document.getElementById("options").style.display = "none"; 
            selectionOpen = false; 
        } else {
            justOpenedSelection = false; 
        }
    }); 

    for (var i = 0; i < audioList.length; i++) {
        const div = document.createElement("div");
        div.classList.add("option");
        const divInner = document.createElement("div"); 
        divInner.innerHTML = audioList[i].replace(".mp3", "");
        divInner.classList.add("option-inner"); 
        div.addEventListener("click", function(e) {
            changeOption(this.innerText);
        });
        div.appendChild(divInner);
        document.getElementById("options").appendChild(div);
    }

    document.getElementById("selected").innerHTML = audioList[0].replace(".mp3", "");

    document.getElementById("selected").addEventListener("click", (e) => {
        if (!selectionOpen) {
            document.getElementById("options").style.display = "block"; 
            justOpenedSelection = true;
            selectionOpen = true;
        } 
    });
});