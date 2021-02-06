var firstNumber = null;
var secondNumber = null;
var selectedOperation = null;

function ifButtonPressed(theNumber) {
  document.getElementById("inputNumber").value += theNumber;
}

document.addEventListener('keydown', ifNumber);

function ifNumber(e) {
  if (!isNaN(e.key)) {
    inputNumberString = String(document.getElementById("inputNumber").value);
    inputNumberString += e.key;
    if (inputNumberString == Number(inputNumberString)) {
      document.getElementById("inputNumber").value = Number(inputNumberString);
    }
  } else if (e.key == "+") {
    additionOperation();
  } else if (e.key == "-") {
    subtractionOperation();
  } else if (e.key == "*") {
    multiplicationOperation();
  } else if (e.key == "/") {
    divisionOperation();
  } else if (e.key == "=") {
    equalsOperation();
  } else if (e.key == "Enter") {
    equalsOperation();
  } else if (e.key == "Backspace") {
    var intString = document.getElementById("inputNumber").value;
    document.getElementById("inputNumber").value = intString.substring(0, intString.length - 1);
  }

  var outputLength = document.getElementById("calculatorHistory").innerHTML.length;
  if (outputLength >= 24) {
    console.log(1);
    equalsOperation();
  }
}

function allClear() {
  document.getElementById("calculatorHistory").value = ""
  document.getElementById("inputNumber").value = ""
  firstNumber = null;
  secondNumber = null;
}

function clearEntry() {
  document.getElementById("inputNumber").value = ""
}

function additionOperation() {
  selectedOperation = "add"; 
  var aNumber = document.getElementById("inputNumber").value;
  if (aNumber != NaN && aNumber != "") {
    if (firstNumber == null) {
      firstNumber = aNumber;
      document.getElementById("calculatorHistory").innerHTML += firstNumber + "+";
      document.getElementById("inputNumber").value = "";
    } else {
      secondNumber = aNumber;
      document.getElementById("calculatorHistory").innerHTML += secondNumber + "+";
      firstNumber = operate(firstNumber, secondNumber, selectedOperation);
      secondNumber = null;
      document.getElementById("inputNumber").value = "";
    }
  }
}

function subtractionOperation() {
  var aNumber = document.getElementById("inputNumber").value;

  if (aNumber == "" ) {
    document.getElementById("inputNumber").value += "-";
    return;
  }

  if (aNumber != NaN && aNumber != "") {
    if (aNumber == "-") {
      return;
    }
    selectedOperation = "subtract";
    if (firstNumber == null) {
      firstNumber = aNumber;
      document.getElementById("calculatorHistory").innerHTML += firstNumber + "-";
      document.getElementById("inputNumber").value = "";
    } else {
      secondNumber = aNumber;
      document.getElementById("calculatorHistory").innerHTML += secondNumber + "-";
      firstNumber = operate(firstNumber, secondNumber, selectedOperation);
      secondNumber = null;
      document.getElementById("inputNumber").value = "";
    }
  }
}

function multiplicationOperation() {
  selectedOperation = "multiply"; 
  var aNumber = document.getElementById("inputNumber").value;
  if (aNumber != NaN && aNumber != "") {
    if (firstNumber == null) {
      firstNumber = aNumber;
      document.getElementById("calculatorHistory").innerHTML += firstNumber + "*";
      document.getElementById("inputNumber").value = "";
    } else {
      secondNumber = aNumber;
      document.getElementById("calculatorHistory").innerHTML += secondNumber + "*";
      firstNumber = operate(firstNumber, secondNumber, selectedOperation);
      secondNumber = null;
      document.getElementById("inputNumber").value = "";
    }
  }
}

function divisionOperation() {
  selectedOperation = "divide"; 
  var aNumber = document.getElementById("inputNumber").value;
  if (aNumber != NaN && aNumber != "") {
    if (firstNumber == null) {
      firstNumber = aNumber;
      document.getElementById("calculatorHistory").innerHTML += firstNumber + "/";
      document.getElementById("inputNumber").value = "";
    } else {
      secondNumber = aNumber;
      document.getElementById("calculatorHistory").innerHTML += secondNumber + "/";
      firstNumber = operate(firstNumber, secondNumber, selectedOperation);
      secondNumber = null;
      document.getElementById("inputNumber").value = "";
    }
  }
}

function equalsOperation() {
  if (firstNumber != null) {
    secondNumber = document.getElementById("inputNumber").value;
    if (secondNumber != "") {
      if (selectedOperation != null) {
        firstNumber = operate(firstNumber, secondNumber, selectedOperation);
        secondNumber = null;
        document.getElementById("inputNumber").value = firstNumber;
        firstNumber = null;
        document.getElementById("calculatorHistory").innerHTML = "";
      }
    } else {
      document.getElementById("inputNumber").value = firstNumber;
      firstNumber = null;
      document.getElementById("calculatorHistory").innerHTML = "";
    }
  }
}

function operate(numberOne, numberTwo, operation) {
  if (operation == "add") {
    return Number(numberOne) + Number(numberTwo);
  }
  if (operation == "subtract") {
    return Number(numberOne) - Number(numberTwo);
  }
  if (operation == "multiply") {
    return Number(numberOne) * Number(numberTwo);
  }
  if (operation == "divide") {
    return Number(numberOne) / Number(numberTwo);
  }
}