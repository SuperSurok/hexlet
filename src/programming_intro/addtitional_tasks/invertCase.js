// Реализуйте и экспортируйте по умолчанию функцию invertCase, которая меняет в строке регистр каждой буквы на противоположный.
///////////////////////////////////////////////////
//////////////////First Solution///////////////////
///////////////////////////////////////////////////
const invertCase = (str) => {
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newString += str[i].toLowerCase();
        } else {
            newString += str[i].toUpperCase();
        }
    }
    return newString;
}
invertCase('Hello, World!'); // hELLO, wORLD!

///////////////////////////////////////////////////
//////////////////Second Solution///////////////////
///////////////////////////////////////////////////
const invertCase_2 = (str) => {
    let newString = '';
    for (let i = 0; i < str.length; i += 1) {
        const bool = str[i] === str[i].toUpperCase();
        newString += bool ? str[i].toLowerCase() : str[i].toUpperCase();
    }
    return newString;
}

invertCase_2('I loVe JS');     // i LOvE js
