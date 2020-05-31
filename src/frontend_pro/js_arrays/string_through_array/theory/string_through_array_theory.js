const _ = require('lodash');
const text = 'hello hexlet';

const capitalizeWords = (sentence) => {
    const capitalizedWords = [];
    // определяем разделитель - пробел
    const separator = ' ';
    // split разделяет строку по указанному разделителю
    const words = sentence.split(separator);
    for (const word of words) {
        capitalizedWords.push(_.upperFirst(word));
    }
    return capitalizedWords.join(separator)
};

console.log(capitalizeWords(text));