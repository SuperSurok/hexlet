// Реализуйте и экспортируйте по умолчанию функцию reverseInt,
// которая переворачивает цифры в переданном числе и возвращает новое число.


// reverseInt(13); // 31
// reverseInt(-123); // -321
// reverseInt(8900); // 98


const reverseInt = (num) => {
    const numberString = num.toString();
    let start = '';
    if (numberString[0] === '-') {
        start = numberString.slice(0, 1);
        for (let i = numberString.length - 1; i > 0; i -= 1) {
            start += numberString[i];
        }
    } else {
        for (let i = numberString.length - 1; i >= 0; i -= 1) {
            start += numberString[i];
        }
    }
    return Number(start);
};

reverseInt(3100);

/////////////////////////////////////////////////////////
//////////////////// Second Solution ////////////////////
/////////////////////////////////////////////////////////

const reverseIntSecondSolution = (num) => {
    const numberString = String(Math.abs(num));
    let newString = '';
    let i = numberString.length - 1;

    while (i >= 0) {
        newString += numberString[i];
        i -= 1;
    }

    const reverseNumber = Number(newString);
    return num < 0 ? -reverseNumber : reverseNumber;
};

reverseIntSecondSolution(3100);