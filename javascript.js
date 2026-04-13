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

//listener
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("equal") || button.classList.contains("delete")) return;
        if(screen.textContent.length > 8) return;
        screen.textContent += button.textContent;

        if (button.classList.contains("operator")) {
            operator += button.textContent; 
            
            /*if(operator.length == 2) {

            }*/
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
    else operate();
});

//operate function
function operate() {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator == "+") screen.textContent = add(num1, num2);
    else if(operator == "-") screen.textContent = subtract(num1, num2);
    else if(operator == "*") screen.textContent = multiply(num1, num2);
    else if(operator == "/") screen.textContent = divide(num1, num2);
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
    return a / b;
}


