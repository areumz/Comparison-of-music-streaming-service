const times = document.getElementById('time');
const date = new Date();
const hours = date.getHours();

const greetings = (hours) => {
    if (hours>6 && hours<12) {
        times.innerText=`아침`;
    }
    else if (hours>12 && hours<18) {
        times.innerText=`오후`;
    }
    else {
        times.innerText=`저녁`;
    }
}

greetings();