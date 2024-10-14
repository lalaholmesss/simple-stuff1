

function displayTime(){
    const date = new Date();

    let hour = date.getHours().toString().padStart(2, 0);
    let mins = date.getMinutes().toString().padStart(2, 0);
    let seconds = date.getSeconds().toString().padStart(2, 0);

    let time = `${hour}:${mins}:${seconds}`;
    document.getElementById("clock").innerHTML = time;
}
setInterval(displayTime, 1000);



