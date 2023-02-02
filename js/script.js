const rusLetters = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"]

const enLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

function cipher(key, text) {
    let sourceText = text.toLowerCase()
    let abc = [];
    let code;
    let result = "";
    for (let count = 0; count < sourceText.length; count++) {
        if (rusLetters.indexOf(sourceText[count]) !== -1) {
            abc = rusLetters.slice()
            code = abc.slice()
        }
        else if (enLetters.indexOf(sourceText[count]) !== -1) {
            abc = enLetters.slice()
            code = abc.slice()
        } else {
            abc = numbers.slice()
            code = abc.slice()
        }
        for (let index = 0; index < key; index++) {
            code.push(code.shift())
        }
        if (sourceText[count] == ' ') {
            result += '&'
        } else {
            result += code[abc.indexOf(sourceText[count])]
        }
    }

    document.getElementById("result").innerHTML = result
}

function unCipher(key, text) {
    let sourceText = text.toLowerCase()
    let abc = [];
    let code;
    let result = "";
    for (let count = 0; count < sourceText.length; count++) {
        if (rusLetters.indexOf(sourceText[count]) !== -1) {
            abc = rusLetters.slice()
            code = abc.slice()
        }
        else if (enLetters.indexOf(sourceText[count]) !== -1) {
            abc = enLetters.slice()
            code = abc.slice()
        } else {
            abc = numbers.slice()
            code = abc.slice()
        }
        for (let index = 0; index < key; index++) {
            code.push(code.shift())
        }
        if (sourceText[count] == '&') {
            result += ' '
        } else {
            result += abc[code.indexOf(sourceText[count])]
        }
    }
    document.getElementById("result").innerHTML = result
}
