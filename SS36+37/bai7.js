let output = document.getElementById("output");

function display (num) {
    output.value += sum;
}
function calculate(){
    try{
        output.value = eval(output.value);
    }
    catch(err){
        alert("Errol");
    }
}
function Clear (){
    output.value ="";
    
}