const length = string => string.length;
const separator = '\0';

//////////////////////////////////////////////////
///// Solution ///////////////////////////////////
//////////////////////////////////////////////////

export const cons_m = (str1, str2) => {
    const sign = '\0';
    const string = `${str1}${sign}${str2}`;
    return string;
};

export const car_m = (pair) => {
    let string = '';
    for (let i = 0; i <= length(pair); i += 1) {
        if (pair[i] !== '\0') {
            string += `${pair[i]}`
        } else {
            return string;
        };
    }
    return string;
};

export const cdr_m = (pair) => {
    let string = '';
    for (let i = length(pair) - 1; i > 0; i -= 1) {
        if (pair[i] !== '\0') {
            string += pair[i];
        } else {
            return string.split('').reverse().join('');
        }
    }
    return string.split('').reverse().join('');
};

//////////////////////////////////////////////////
///// Master Solution ////////////////////////////
//////////////////////////////////////////////////

const str = string => string.length;
const separator = '\0';

const getSeparatorPosition = (string) => {
    const iter = i => (string[i] === separator ? i : iter(i + 1));
    return iter(0);
};

const getValue = (pair, begin, end) => {
    const iter = (acc, i) => {
        if (i >= end) {
            return acc;
        }
        const newAcc = `${acc}${pair[i]}`;

        return iter(newAcc, i + 1);
    };

    return iter('', begin);
};

const cons_m = (a, b) => `${a}${separator}${b}`;
const car_m = pair => getValue(pair, 0, getSeparatorPosition(pair));
const cdr_m = pair => getValue(pair, getSeparatorPosition(pair) + 1, str(pair));

const pair = cons_m('hi', 'hexlet');
const one = car_m(pair);
const two = cdr_m(pair);

console.log(pair, one, two);
