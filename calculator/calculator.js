var display = document.querySelector(".display")
var btn = document.querySelectorAll("button")
var spChar = ["%","/","-","+","=","*"]
let output=""

var calculate = (btnvalue) => {
    if(btnvalue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"))
    }else if(btnvalue === "AC") {
        output =""
    }else if(btnvalue === "DEL") {
        output = output.toString().slice(0, -1)
    }else {
        if (output === "" && spChar.includes(btnvalue)) return
        output += btnvalue
    }
    display.value = output

}
btn.forEach((button) => {
    button.addEventListener("click", e => calculate(e.target.value))
})
