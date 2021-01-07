
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function showTime() {
    const date = new Date();
        return date.getHours() + "Hrs:" +date.getMinutes() + "Mins:" +date.getSeconds()+ "Secs ";
    }

function makeAJAXCall(methodType, url, callback, async = true, data = null) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log("State Changed Called at : "+showTime()+ " Ready state: " +xhr.readyState+ "Status: " +xhr.status);
        if(xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201) {
                callback(xhr.responseText);
            } else if (xhr.staus >= 400) {
                console.log("Handle 400 Client Error or 500 Server Error at: "+showTime());
            }
        }
    }
    xhr.open(methodType, url, async);
    if (data) {
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    } else xhr.send();
    console.log(methodType+ " request sent to the server at: " +showTime());
}

const getURL = "http://localhost:3000/employees/1";
function getUserDetails(data) {
    console.log("GET User Data at: " +showTime()+ " data: " +data)
}
makeAJAXCall("GET", getURL, getUserDetails, true);
console.log("Made GET AJAX Call to server at : " +showTime());
