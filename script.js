//start button 
<button onclick="style.display = 'none' ">Start Quiz</button>


//Clock
var timer;
function clock(){
    timer = setInterval(myClock, 1000);
    function myClock() {
    document.getElementById("timer").innerHTML = c--;
    if (c == 0) {
        clearInterval(timer);
    }
    }
}