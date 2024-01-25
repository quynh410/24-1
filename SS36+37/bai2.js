let btn = document.getElementById("button");
function changeStyleBtn() {
    if (btn.innerHTML === "OFF") {
        btn.innerHTML = "ON";
    } else if (btn.innerHTML === "ON") {
        btn.innerHTML = "OFF";
    }
}