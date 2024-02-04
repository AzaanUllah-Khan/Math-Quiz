var level;
var operator;

var oprSigns = {
    Add: "+",
    Sub: "-",
    Multiply: "*",
    Divide: "/"
}

function changeOpr(e){
    operator = e
    console.log(operator);
    document.getElementById("operator").innerHTML = oprSigns[operator]
}