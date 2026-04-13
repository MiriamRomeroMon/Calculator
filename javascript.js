//query.Selector to all buttons
const buttons = document.querySelectorAll(".buttons button");
const deletebtn = document.querySelector(".delete");
const equal = document.querySelector(".equal");
const screen = document.querySelector(".screen");
const backspace = document.querySelector(".backspace");


//operation variables
let num1 = "";
let operator = "";
let num2 = "";
let resultShown = false;

//listener
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("equal") || button.classList.contains("delete") || button.classList.contains("backspace")) return;
        if(screen.textContent.length > 8) return;
        if(button.textContent === "." && (num1.includes(".") || num2.includes("."))) return; //
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
    else screen.textContent = parseFloat(operate().toFixed(2)); //round answers with long decimals
    resultShown = true;
});

//operate function
function operate() {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator == "+") return num1 + num2;
    else if(operator == "-") return num1 - num2;
    else if(operator == "*") return num1 * num2;
    else if (operator == "/" && num2 == 0) return "You can't divide with zero!";
    else if(operator == "/") return num1 / num2;
}

//delete button
deletebtn.addEventListener("click", () => {
    screen.textContent = "";
    num1 = "";
    operator = "";
    num2 = "";
})

//backspace button
backspace.addEventListener("click", () => {
    screen.textContent = screen.textContent.slice(0, -1);
    if (operator === "") {
        num1 = num1.slice(0, -1);
    } else {
        num2 = num2.slice(0, -1);
    }
});

//keydown listener
document.addEventListener("keydown", (e) => {
   console.log(e.key);
   
   buttons.forEach(button => {
    if (e.key === "Enter") equal.click();
    if(e.key === "Backspace") backspace.click();
    if (e.key === "Escape") deletebtn.click();
    if (e.key === button.textContent) button.click();
   });
});