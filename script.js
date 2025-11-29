/*Project 5: Build a digital clock using JavaScript.

    Requirements:
-Create a Github repository for this project. 
- Display the hours, minutes, and seconds.
- The clock should run by itself. (Hint: look at JavaScript setInterval function)
    - Google "javascript date get time" to see the built -in JavaScript helpers you can use.
- The clock should automatically update the time every second.*/

let is24Hour = true;

function updateClock() {
    const now = new Date();
    let clockEl = document.getElementById("clock");
    const timeStr = now.toLocaleTimeString();
    clockEl.textContent = timeStr;
    let timeInterval = setInterval(updateClock, 1000);

    clearInterval(timeInterval);
}

updateClock();
