let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let answerRandom;
let textRandom;

between = document.getElementById('between');
between.innerText = 'от ' + String(minValue) + ' до ' + String(maxValue);

document.getElementById('btnRetry').addEventListener('click', function () {
    orderNumber = 1;
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
    between.innerText = 'от ' + String(minValue) + ' до ' + String(maxValue);
    gameRun = true;
})

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;



document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerRandom = Math.round(Math.random() * 2);
            switch (answerRandom) {
                case 0:
                    textRandom = 'Наверняка, это число';
                    break;
                case 1:
                    textRandom = 'Хмм...я думаю, это число';
                    break;
                case 2:
                    textRandom = 'Теперь точно угадал, это число';
                    break;
            }
            answerField.innerText = `${textRandom}  ${answerNumber}?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerRandom = Math.round(Math.random() * 2);
            switch (answerRandom) {
                case 0:
                    textRandom = 'Наверняка, это число';
                    break;
                case 1:
                    textRandom = 'Хмм...я думаю, это число';
                    break;
                case 2:
                    textRandom = 'Теперь точно угадал, это число';
                    break;
            }
            answerField.innerText = `${textRandom}  ${answerNumber}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerRandom = Math.round(Math.random() * 2);
        switch (answerRandom) {
            case 0:
                textRandom = 'Это было легко\n\u{1F604}';
                break;
            case 1:
                textRandom = 'Да, я умею читать мысли\n\u{1F609}';
                break;
            case 2:
                textRandom = 'Это слишком просто\n\u{1F605}';
                break;
        }
        answerField.innerText = `${textRandom}`
        gameRun = false;
    }
})

