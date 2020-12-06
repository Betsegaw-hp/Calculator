const displayScreen = document.querySelector("#display-screen");
let prevNum ="";
let newNum = "";
let result = "";
let operator;
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
   if(!result && newNum) { 
      prevNum = newNum;
   }
   operator = mathoperator;
   period = false;
   newNum = "";
   //  For other operations
   switch (operator) {
      case "log":
         displayScreen.value = Math.log10(prevNum);
         result = displayScreen.value;
         prevNum = result;
         break;
      default:
         displayScreen.value = "";
         displayScreen.placeholder = operator;
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
 operator = undefined;
 period = false;

 displayScreen.value = "";
 displayScreen.placeholder = "0";
}
function copy() {
  saveValue = displayScreen.value;
}
function paste() {
   displayScreen.value += saveValue.toString();
   newNum = displayScreen.value;
}

function Del() {
   // if result exist just return and relax!
   if(result) return clearBtn();

   let curentNum = displayScreen.value;
   const index = curentNum.length -1;
   curentNum = curentNum.slice(0,index);
   newNum = newNum.slice(0,index);

   // determine period state
   if(curentNum.includes(".")) {
      period = true;
   } else {
      period = false;
   }
   
   displayScreen.value = curentNum;
}
