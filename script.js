const input = document.querySelector(".input");
const answer = document.querySelector(".answer");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const keys = document.querySelector(".keys");
const ac = document.querySelector(".ac");
const del = document.querySelector(".del");
const dot = document.querySelector(".dot");
const equals = document.querySelector(".eq")

let equation = "";
let num1= "", num2="", result="";
let op;
let opClick = false;
let dotNotClicked = true;
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
        if(event.target.textContent == "." && dotNotClicked == true){
             num1 = `${num1}${event.target.textContent}`;
             input.textContent = num1;
             dotNotClicked = false;
        }
        else if(event.target.textContent != "."){
         num1 = `${num1}${event.target.textContent}`;
        input.textContent = num1;
        }

    }
    if(opClick == true){
            if(event.target.className == "dot" && dotNotClicked == true){
             num2 = `${num2}${event.target.textContent}`;
             input.textContent = input.textContent + event.target.textContent;
             dotNotClicked = false;
        }
        else if(event.target.textContent != "."){
        num2 = `${num2}${event.target.textContent}`;
        input.textContent = input.textContent + event.target.textContent;
        }

    }
});
operators.addEventListener("click", function(event){
    if(event.target.textContent != "=" && event.target.textContent != "AC" && event.target.textContent !="Del"){
        opClick = true;
        op = event.target.textContent;
        input.textContent = input.textContent + op;
        dotNotClicked = true;
    }
    if(event.target.textContent == "="){
        operate(num1, num2, op);
            num1 = result; 
            num2 = "";       
    }
    if(event.target.textContent == "AC"){
        num1 = "";
        num2 = "";
        input.textContent = "";
        answer.textContent = "";
        opClick = false;
        dotNotClicked = true;
    }
    if(event.target.textContent == "Del"){
        if(opClick == false){
            let arr = num1.split('');
            let popped = arr.pop();
            num1 = arr.join('');
            input.textContent = num1;
            if(popped == "."){
                dotNotClicked = true;
            }
        }
        else if(opClick == true && num2 == ""){
            op = "";
            opClick = false;
            input.textContent = num1;
        }
        else if(opClick == true && num2 != ""){
            let arr = num2.split('');
            let popped = arr.pop();
            num2 = arr.join('');
            let arr1 = input.textContent.split('');
            arr1.pop();
            arr1 = arr1.join('');
            input.textContent = arr1;
             if(popped == "."){
                dotNotClicked = true;
            }
        }
    }
});
let clickk = new Event("click", {bubbles: true, cancelable: true});
window.addEventListener("keydown", function(event){
        if(event.key == "Enter"){
        equals.dispatchEvent(clickk);
        return;
    }
    else if(event.key == "Backspace"){
        del.dispatchEvent(clickk);
        return;
    }
    else if(event.key == "."){
        dot.dispatchEvent(clickk);
    }
    const btn = keys.querySelector(`.${CSS.escape(event.key)}`);
    if(btn){
        btn.dispatchEvent(clickk);
    }


});

