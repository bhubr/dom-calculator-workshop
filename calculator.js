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

    if (operand1.value === '' || operand2.value === '') {
      resultDiv.innerText = 'Veuillez saisir deux valeurs';
      return;
    }
    const op1int = parseInt(operand1.value);
    const op2int = parseInt(operand2.value);
    if (Number.isNaN(op1int) || Number.isNaN(op2int)) {
      resultDiv.innerText = 'Veuillez saisir des nombres valides';
      return;
    }
    if (operator.value === '/' && op2int === 0) {
      resultDiv.innerText = 'Impossible de diviser par zéro !';
      return;
    }
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
