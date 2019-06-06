// Реализуйте и экспортируйте по умолчанию функцию reverseInt,
// которая переворачивает цифры в переданном числе и возвращает новое число.


// reverseInt(13); // 31
// reverseInt(-123); // -321
// reverseInt(8900); // 98


const reverseInt = (str) => {
    const numberString = str.toString();
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