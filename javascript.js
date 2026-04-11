//query.Selector to all buttons
const buttons = document.querySelectorAll(".buttons button");
const operators = document.querySelectorAll(".operator")
const deletebtn = document.querySelector(".delete");
const equal = document.querySelector(".equal");
const screen = document.querySelector(".screen")


//operation variables
let num1 = Number("");
let operator = "";
let num2 = Number("");

//listener
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("equal") || button.classList.contains("delete")) return;
        screen.textContent += button.textContent;
        if(operator.length === 0) {
            num1 += button.textContent;
        }else if (operator.length === 1) {
            num2 += button.textContent;
        }
    });
});

//guardar operators en operator

//limit case


//add function



