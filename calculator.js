const operand1 = document.getElementById('operand-1');
const operand2 = document.getElementById('operand-2');
const operator = document.getElementById('operator');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

console.dir(operand1);

calculateBtn.addEventListener(
  'click',
  function() {
    // 1. récupérer les valeurs des input/select
    // 2. convertir les valeurs des opérandes
    // 3. effectuer l'opération en fonction de l'opérateur

    const op1int = parseInt(operand1.value);
    const op2int = parseInt(operand2.value);
    let result;

    switch (operator.value) {
      case '+':
        result = op1int + op2int;
        break;
      case '-':
        result = op1int - op2int;
        break;
      case '*':
        result = op1int * op2int;
        break;
      case '/':
        result = op1int / op2int;
        break;
      default:
    }

    resultDiv.innerText = result;
    // resultDiv.innerHTML = '<h1>'+ result + '</h1>';
  }
);
