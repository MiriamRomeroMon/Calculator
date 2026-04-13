//query.Selector to all buttons
const buttons = document.querySelectorAll(".buttons button");
const operators = document.querySelectorAll(".operator")
const deletebtn = document.querySelector(".delete");
const equal = document.querySelector(".equal");
const screen = document.querySelector(".screen")


//operation variables
let num1 = "";
let operator = "";
let num2 = "";
let resultShown = false;

//listener
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("equal") || button.classList.contains("delete")) return;
        if(screen.textContent.length > 8) return;

        if (resultShown == true) {
             screen.textContent = "";
            num1 = "";
            operator = "";
            num2 = "";
            resultShown = false;
        }

        screen.textContent += button.textContent;

        if (button.classList.contains("operator")) {
            
            if(num2 !== "") { 
                num1 = parseFloat(operate().toFixed(2));
                num2= "";
            }
            operator = button.textContent; 
        }


        if(operator.length === 0) {
            num1 += button.textContent;
        }else if (operator.length === 1) {
            if(!button.classList.contains("operator")) {
               num2 += button.textContent; 
            }
            
        }
    });
});


//equal listener
equal.addEventListener("click", () =>{
    if(num1 === "" || operator === "" || num2 === "") return;
    else screen.textContent = parseFloat(operate().toFixed(2));
    resultShown = true;
});

//operate function
function operate() {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator == "+") return add(num1, num2);
    else if(operator == "-") return subtract(num1, num2);
    else if(operator == "*") return multiply(num1, num2);
    else if(operator == "/") return divide(num1, num2);
}

//delete button
deletebtn.addEventListener("click", () => {
    screen.textContent = "";
    num1 = "";
    operator = "";
    num2 = "";
})



//add function
function add(a, b) {
 return a + b;
}   

//substract function 
function subtract(a, b) {
    return a - b;
}

//multiply function
function multiply(a, b) {
    return a * b;
}

//divide function
function divide(a, b) {
    if(b == 0) {
        return "You can't divide with zero!";
    } else {
       return a / b; 
    }
    
}


