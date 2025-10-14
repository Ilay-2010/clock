const clock = document.getElementById("clock");

function updateClock() {
    const time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    if (screen.width < 1000) {
        let output = `${hours}<br>${minutes}<br>${seconds}`;
        clock.innerHTML = output;
    }
    else {
        let output = `${hours}:${minutes}:${seconds}`;
        clock.innerHTML = output;
    }
}

setInterval(updateClock, 100);
