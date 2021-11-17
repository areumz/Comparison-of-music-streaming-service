const times = document.getElementById('time');
let date = new Date();
let hours = date.getHours();

let greetings = () => {
    if (hours > 6 && hours <= 12) {
        times.innerText = `아침`;
    }
    else if (hours > 12  && hours <= 17) {
        times.innerText = `오후`;
    }
    else if (hours > 17 && hours < 21) {
        times.innerText = `저녁`;
    }
    else {
        times.innerText = `밤`;
    }
}

greetings();