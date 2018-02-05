
let arr = [];


function addKeyboardLayout(alphabet) {
    arr.push(alphabet);
    return arr;
};
addKeyboardLayout('qwertyuiop[]');
addKeyboardLayout('asdfghjkl;\'');
addKeyboardLayout('zxcvbnm,./');


const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};


keyboard.layouts.en.topRow = arr[0];
keyboard.layouts.en.middleRow = arr[1];
keyboard.layouts.en.bottomRow = arr[2];

keyboard.layouts.ru.topRow = ['йцукенгшщзхъё'];
keyboard.layouts.ru.middleRow = ['фывапролджэ'];
keyboard.layouts.ru.bottomRow = ['ячсмитьбю/'];

keyboard.layouts.ua.topRow = ['йцукенгшщзхїґ'];
keyboard.layouts.ua.middleRow = ['фивапролджє'];
keyboard.layouts.ua.bottomRow = ['ячсмітьбю/'];

let isCorrectLangEntered = false;
let isCancelButtonPressed = false;
let question = -1;

do {
    question = prompt('Enter a number: en-0, ru-1, ua-2', '');

    if (question === null) {
        isCancelButtonPressed = true;
        break;
    }
    
    if( isQuestionCorrect(question) ) {
        isCorrectLangEntered = true;
    }
    
} while(!isCorrectLangEntered);


if (!isCancelButtonPressed) {    
    addCurrentLang();
}


function isQuestionCorrect() {
    if(question === '0' || question === '1' || question === '2' || false) {
        return true;
    } 
    else {
        alert('This language does not exist. Please, try again');
        return false;
    }
}


function addCurrentLang() {
    if(question === '0') {
        keyboard.currentLang = 'en';
    } else if(question === '1') {
        keyboard.currentLang = 'ru';
    }  else if(question === '2') {
        keyboard.currentLang = 'ua';
    } else
        return;
};



function getRandCharInAlph() {
    let current = keyboard.currentLang;
    let arrDublicated = [];
    for(let i in keyboard.layouts[current]) {
        arrDublicated = arrDublicated.concat(keyboard.layouts[current][i]);
    }
    
    let arrReduced = arrDublicated.reduce( (memo, v)  => {
        return memo + v;
    }, "");
    let min = 0;
    let max = arrReduced.length;
    let i = Math.floor(Math.random() * (max - min)) + min;
    return arrReduced[i];
};
