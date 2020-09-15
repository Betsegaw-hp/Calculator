const displayScreen = document.querySelector("#display-screen");
let prevNum ="";
let newNum = "";
let result = "";
let operator = "";
let saveValue ="";
let period = false;
// function

function addNum(num) {
      if(num === ".") {
         if(period === false) {
            newNum += num;
            period =true;
         }
      } else {
         newNum += num;
      }
      displayScreen.value = newNum;
      console.log(newNum);
}
function operate(mathoperator) {
   if(!result) {
      prevNum = newNum;
   }
   operator = mathoperator;
   displayScreen.value = "0";
   period = false;
   newNum = "";
   switch (operator) {
      case "log":
         displayScreen.value = Math.log10(prevNum);
         break;
   }
}
function mathEqual() {
   prevNum = parseFloat(prevNum);
   newNum = parseFloat(newNum);
   switch (operator) {
      case "+":
         displayScreen.value = prevNum + newNum; 
         break;
      case "-":
         displayScreen.value = prevNum - newNum; 
         break;
      case "*":
         displayScreen.value = prevNum * newNum; 
         break;
      case "/":
         displayScreen.value = prevNum / newNum ; 
         break;
      case "%":
         displayScreen.value = prevNum % newNum ;
         break;
      case "^":
         displayScreen.value = Math.pow(prevNum , newNum);
         break;
      default:
         displayScreen.value = newNum;
         break;
   }
   result = displayScreen.value;
   prevNum = result;
}
function clearBtn() {
 prevNum ="";
 newNum = "";
 result = "";
 operator = "";
 period = false;

 displayScreen.value = "0";
}
function copy() {
  saveValue = displayScreen.value;
}
function paste() {
   displayScreen.value = saveValue;
   newNum = saveValue;
}
const showAdvance = document.querySelector("#advanced");
showAdvance.addEventListener("click",function() {
   document.querySelector(".advanced-operators").classList.toggle("show-advanced-operators")
});




