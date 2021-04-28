type ButtonValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | '.';
enum OperatorValue {
    Plus = '+',
    Minus = '-',
    Div = '/',
    Mul = 'X'
}

const myScreen = document.getElementById("myScreen") as HTMLInputElement;

let firstValue: string;
let operation: OperatorValue;



function clickDigitOrDot(char: ButtonValue): void {
    if (myScreen.value === '' && char === '.') {
        myScreen.value = '0.'
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
};

function backspace(): void {

    myScreen.value = myScreen.value.substr(0, myScreen.value.length - 1)
}

function operationClick(operator: OperatorValue): void {

    firstValue = myScreen.value;

    myScreen.value = '';

    operation = operator;

}

function equals(): void {
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
};


function clearing(): void {
    firstValue = null;
    operation = null;
    myScreen.value = null;
};

function negate(): void {

    if (myScreen.value === '0' || myScreen.value === '') {

        return;
    }

    myScreen.value = (Number(myScreen.value) * -1).toString();
};

function geniusNomeroUno(): void {

    const buttons = document.getElementsByTagName('button');

    for (let element of buttons) {
        const red = Math.floor(Math.random() * 255)
        const green = Math.floor(Math.random() * 255)
        const blue = Math.floor(Math.random() * 255)
        console.log(element);

        element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        if ((red + green + blue) > 383) {

            element.style.color = 'black';
        } else {
            element.style.color = 'white';
        }


    }

}






