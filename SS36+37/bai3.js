
function updateDivOnChange() {
    let input = document.getElementById("inputText").value;
    let outputDiv = document.getElementById("outputDiv");
    outputDiv.innerHTML = "Cách 1: " + input;
}

function updateDivOnInput() {
    let input = document.getElementById("inputText").value;
    let outputDiv = document.getElementById("outputDiv");
    outputDiv.innerHTML += "<br>Cách 2: " + input;
}
