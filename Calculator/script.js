var firstNum = 0;
var secondNum = 0;
var operatorPicked;

function press(num){
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText = num;
    if (firstNum === 0)
    {
        firstNum = num;
    }
    else(secondNum === 0)
    {
        secondNum = num;
    }


}

function setOP(operator){
    operatorPicked = operator;
}

function calculate(){
    
    console.log(firstNum, operatorPicked, secondNum);
    answer = doMath(operatorPicked);
 
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText = answer;
}

function doMath(operatorPicked){
    var answer;
    if(operatorPicked === "*"){
        console.log("multiply");
        answer = firstNum * secondNum;

     }
     else if(operatorPicked === "/"){
        answer = firstNum / secondNum;

     }
     else if(operatorPicked === "-"){
        answer = firstNum - secondNum;

     }
     else if(operatorPicked === "+"){
        answer = firstNum + secondNum;

     }
     else {
    answer = "NAN";
    
     }
     firstNum = answer;
     console.log(answer);
     console.log(firstNum);
    return answer;
}

function clr(){
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText = 0;
    firstNum = 0;
    secondNum = 0;
    console.log(firstNum, secondNum);
}

