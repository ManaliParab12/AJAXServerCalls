function showTime() {
    const date = new Date();
        return date.getHours() + "Hrs:" +date.getMinutes() + "Mins:" +date.getSeconds()+ "Secs";
    }

function showSessionExpire() {
    console.log("Activity-B: Your session expired at "+showTime());
}    