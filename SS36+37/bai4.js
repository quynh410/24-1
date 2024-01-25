function calculateSum() {
    let input1 = parseInt(document.getElementById("input1").value) || 0;
    let input2 = parseInt(document.getElementById("input2").value) || 0;
    let sum = input1 + input2;
    document.getElementById("sumInput").value = sum;
    }