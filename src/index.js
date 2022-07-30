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
    let x = expr.length % 10;
    let prepareExpr = (x !== 0) ? '0'.repeat(10 - x) + expr : expr;
    let prepareArrayExpr = prepareExpr.match(/.{1,10}/g);
    let resultArrayExpr = [];
    for (let elem of prepareArrayExpr) {
        if (elem === '**********') {
            resultArrayExpr.push(' ');
        } else { 
            let elementDecode = '';
            for (let i = 0; i < elem.length; i += 2) {
                if ((elem[i] + elem[i + 1]) === '00') {elementDecode = elementDecode + ''};
                if ((elem[i] + elem[i + 1]) === '10') {elementDecode = elementDecode + '.'};
                if ((elem[i] + elem[i + 1]) === '11') {elementDecode = elementDecode + '-'};
            }
            resultArrayExpr.push(elementDecode);
        }
    }; 
    let result = resultArrayExpr.map((symbol) => {
        (symbol === ' ') ?  symbol = symbol : symbol = MORSE_TABLE[symbol];
        return symbol;
    });
    return result.join('');
}

module.exports = {
    decode
}