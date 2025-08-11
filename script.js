const input = document.querySelector(".input");
const answer = document.querySelector(".answer");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const keys = document.querySelector(".keys");

let equation = "";
let num1= "", num2="", result="";
let op;
let opClick = false;
function operate(num1, num2, op){
    num1 = Number(num1);
    num2 = Number(num2);
    switch(op){
        case "+": result = num1 + num2;
        break;
        case "-": result = num1 - num2;
        break;
        case "*": result = num1 * num2;
        break;
        case "/": result = num1 / num2;
        break;
        default: result = "Error";
    }
    answer.textContent = result;
}

numbers.addEventListener("click", function(event){
    if(opClick == false){
        num1 = `${num1}${event.target.textContent}`;
        input.textContent = num1;
    }
    if(opClick == true){
        num2 = `${num2}${event.target.textContent}`;
        input.textContent = input.textContent + event.target.textContent;
    }
});
operators.addEventListener("click", function(event){
    if(event.target.textContent != "=" && event.target.textContent != "AC"){
        opClick = true;
        op = event.target.textContent;
        input.textContent = input.textContent + op;
    }
    if(event.target.textContent == "="){
        operate(num1, num2, op);
            num1 = result; 
            num2 = "";       
    }
    if(event.target.textContent == "AC"){
        num1 = "";
        num2 = "";
        result = "";
        input.textContent = "";
        answer.textContent = "";

    }
});
