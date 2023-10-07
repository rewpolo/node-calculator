const rs = require('readline-sync');

const ops = ["+", "-", "*", "/"];

function getOp() {
  let operator = rs.question('What operation would you like to perform? ');
  if(!ops.includes(operator)) {
    console.log('That is not a valid operation');
    getOp()
  } else {
    console.log(operator);

    let first = rs.questionInt('Please enter the first number: ');

    let second = rs.questionInt('Please enter the second number: ');

    let result;
    if(operator === "+") {
      result = first + second;
    } else if (operator === "-") {
      result = first - second;
    }else if (operator === "*") {
      result = first * second;
    }else if (operator === "/") {
      if (second!== 0) {
        result = first / second;
      } else {
        console.log('Error: Division by zero');
        return;
      }
    }
    console.log(`Result: ${result}`);
  } 
}

getOp();