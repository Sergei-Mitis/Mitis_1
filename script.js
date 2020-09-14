let lastOperand = 0;
let operation = null;
let window_2 = '';


const inputWindow = document.getElementById('inputWindow');
inputWindow.value = '0';

document.getElementById('btn_1').addEventListener('click', function () {
    if (inputWindow.value.slice(0) == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '1';
})
document.getElementById('btn_2').addEventListener('click', function () {
    if (inputWindow.value.slice(0) == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '2';
})
document.getElementById('btn_3').addEventListener('click', function () {
    if (inputWindow.value.slice(0) == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '3';
})
document.getElementById('btn_4').addEventListener('click', function () {
    if (inputWindow.value.slice(0) == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '4';
})
document.getElementById('btn_5').addEventListener('click', function () {
    if (inputWindow.value.slice(0) == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '5';
})
document.getElementById('btn_6').addEventListener('click', function () {
    if (inputWindow.value.slice(0) == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '6';
})
document.getElementById('btn_7').addEventListener('click', function () {
    if (inputWindow.value.slice(0) == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '7';
})
document.getElementById('btn_8').addEventListener('click', function () {
    if (inputWindow.value.slice(0) == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '8';
})
document.getElementById('btn_9').addEventListener('click', function () {
    if (inputWindow.value.slice(0) == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '9';
})
document.getElementById('btn_zero').addEventListener('click', function () {
    if (inputWindow.value.slice(0) == 0) {
        inputWindow.value = inputWindow.value.substr(1);
    }
    inputWindow.value += '0';
})
document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "+";
    inputWindow.value = '';

})
document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "-";
    inputWindow.value = '';

})
document.getElementById('btn_multi').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "*";
    inputWindow.value = '';

})
document.getElementById('btn_divis').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "/";
    inputWindow.value = '';

})
document.getElementById('btn_dat').addEventListener('click', function () {
    inputWindow.value += '.';

})
document.getElementById('btn_pm').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "pm";
    inputWindow.value = '';

})
document.getElementById('btn_root').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = "root";
    inputWindow.value = '';

})
document.getElementById('btn_calc').addEventListener('click', function () {
    if (operation === '+') {
        result = lastOperand + parseFloat(inputWindow.value);
    }
    if (operation === '-') {
        result = lastOperand - parseFloat(inputWindow.value);
    }
    if (operation === '*') {
        result = lastOperand * parseFloat(inputWindow.value);
    }
    if (operation === '/') {
        result = lastOperand / parseFloat(inputWindow.value);
    }
    window_2 = lastOperand + operation + inputWindow.value + '=' + result;
    document.getElementById("window_2").innerHTML = window_2;
    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
})
document.getElementById('btn_pm').addEventListener('click', function () {
    if (operation === 'pm') {
        const result = lastOperand * lastOperand;;
        window_2 = lastOperand + "<sup>2</sup>" + ' = ' + result;
        document.getElementById("window_2").innerHTML = window_2;
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }

})
document.getElementById('btn_root').addEventListener('click', function () {
    if (operation === 'root') {
        const result = Math.sqrt(lastOperand);
        window_2 = "√" + lastOperand + ' = ' + result;
        document.getElementById("window_2").innerHTML = window_2;
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }

})
document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';

})
