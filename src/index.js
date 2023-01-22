const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let currentLetter = '';

    morseToDigits();
    const numberOfLetter = expr.length / 10;
    for (let i = 0; i < numberOfLetter; i++) {
        currentLetter = expr.substr(i * 10, 10);
        result = result + MORSE_DIGITS[currentLetter];
    };
    return result;
};

let MORSE_DIGITS = {
    '**********': ' ',
};

const morseToDigits = () => {
    let newKey = '';
    for (let key in MORSE_TABLE) {
        newKey = key.replace(/\./g, "10").replace(/-/g, "11").padStart(10, "0");
        MORSE_DIGITS[newKey] = MORSE_TABLE[key];
    };
    return MORSE_DIGITS;
};

module.exports = {
    decode
}