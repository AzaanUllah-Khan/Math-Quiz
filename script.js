var level = "beginner";
var operator = "Add";
var ans;
var num1;
var num2;

var oprSigns = {
    Add: "+",
    Sub: "-",
    Multiply: "*",
    Divide: "/"
}

document.getElementById("operator").innerText = oprSigns[operator]
function changeLvl(e) {
    level = e
    console.log(level);
    changeVal()
}
function changeOpr(e) {
    operator = e
    console.log(operator);
    document.getElementById("operator").innerText = oprSigns[operator]
    changeVal()
}

function changeVal() {
    if(level === "beginner" && operator == "Add" || operator == "Sub"){
        num2 = Math.ceil(Math.random()*50)
        num1 = Math.ceil(Math.random()*50)+num2
    }
    else if(level === "beginner" && operator == "Multiply" || operator == "Divide"){
        num1 = Math.ceil(Math.random()*15)
        num2 = Math.ceil(Math.random()*15)
    }
    else if(level === "int" && operator == "Add" || operator == "Sub"){
        num1 = Math.ceil(Math.random()*120)+30
        num2 = Math.ceil(Math.random()*120)+30
    }
    else if(level === "int" && operator == "Multiply" || operator == "Divide"){
        num1 = Math.ceil(Math.random()*25)+10
        num2 = Math.ceil(Math.random()*25)+10
    }
    else if(level === "adv" && operator == "Add" || operator == "Sub"){
        num1 = Math.ceil(Math.random()*300)+69
        num2 = Math.ceil(Math.random()*300)+69
    }
    else if(level === "adv" && operator == "Multiply" || operator == "Divide"){
        num1 = Math.ceil(Math.random()*50)+20
        num2 = Math.ceil(Math.random()*50)+20
    }
    document.getElementById("num1").innerText = num1
    document.getElementById("num2").innerText = num2
}

function submit(inp){
    ans = `${num1} ${oprSigns[operator]} ${num2}`
    if(eval(ans)==inp.previousElementSibling.value){
        Swal.fire(
            "Correct",
            'Your answer is correct',
            'success'
        )
        inp.previousElementSibling.value = ""
    }else{
        Swal.fire(
            "Wrong",
            'The answer you entered is wrong',
            'error'
        )
    }
    changeVal()
}

changeVal()