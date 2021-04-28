var OperatorValue;
(function (OperatorValue) {
    OperatorValue["Plus"] = "+";
    OperatorValue["Minus"] = "-";
    OperatorValue["Div"] = "/";
    OperatorValue["Mul"] = "X";
})(OperatorValue || (OperatorValue = {}));
const myScreen = document.getElementById("myScreen");
let firstValue;
let operation;
function clickDigitOrDot(char) {
    if (myScreen.value === '' && char === '.') {
        myScreen.value = '0.';
        return;
    }
    if (myScreen.value.includes('.') && char === '.') {
        return;
    }
    if (myScreen.value === '0' && char === 0) {
        return;
    }
    if (myScreen.value === '0' && char !== 0 && char !== '.') {
        myScreen.value = char.toString();
        return;
    }
    myScreen.value += char;
}
;
function backspace() {
    myScreen.value = myScreen.value.substr(0, myScreen.value.length - 1);
}
function operationClick(operator) {
    firstValue = myScreen.value;
    myScreen.value = '';
    operation = operator;
}
function equals() {
    if (firstValue === null) {
        return;
    }
    switch (operation) {
        case OperatorValue.Plus: {
            myScreen.value = (Number(firstValue) + Number(myScreen.value)).toString();
            break;
        }
        case OperatorValue.Minus: {
            myScreen.value = (Number(firstValue) - Number(myScreen.value)).toString();
            break;
        }
        case OperatorValue.Mul: {
            myScreen.value = (Number(firstValue) * Number(myScreen.value)).toString();
            break;
        }
        case OperatorValue.Div: {
            if (myScreen.value === '0') {
                return;
            }
            myScreen.value = (Number(firstValue) / Number(myScreen.value)).toString();
            break;
        }
    }
    firstValue = null;
}
;
function clearing() {
    firstValue = null;
    operation = null;
    myScreen.value = null;
}
;
function negate() {
    if (myScreen.value === '0' || myScreen.value === '') {
        return;
    }
    myScreen.value = (Number(myScreen.value) * -1).toString();
}
;
function geniusNomeroUno() {
    const buttons = document.getElementsByTagName('button');
    for (let element of buttons) {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        console.log(element);
        element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        if ((red + green + blue) > 383) {
            element.style.color = 'black';
        }
        else {
            element.style.color = 'white';
        }
    }
}
