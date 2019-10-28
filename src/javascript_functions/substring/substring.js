//////////////////////////////////////////////////////
/////////// First Solution //////////////////////////
//////////////////////////////////////////////////////

{
    const substr = (string, start = 0, stringLength = (string.length)) => {
        const innerString = string;
        let startString = start;
        let stringLen = stringLength;
        let newString = '';
        let counter = 0;
        if (stringLen > string.length && startString < 0) stringLen = string.length;
        if ((startString === 0 && stringLen > string.length)) {
            return string;
        }
        if (stringLen < 0) stringLen = 1;
        if (stringLen > string.length) stringLen = string.length - 1;

        if (startString <= 0) startString = 0;
        if (string.length === 0 || (startString > stringLen)) return '';

        console.log(innerString[startString]);
        while (counter < stringLen) {
            newString += innerString[startString];
            startString += 1;
            counter += 1;
        }
        return newString;
    };
}

//////////////////////////////////////////////////////
/////////// Second Solution //////////////////////////
//////////////////////////////////////////////////////
{
    const substr = (str, index = 0, substrLength = str.length) => {
        if (index >= str.length) {
            return '';
        }

        const currentIndex = index < 0 ? 0 : index;
        let lastIndex = currentIndex + (substrLength - 1);
        console.log(lastIndex);
        if (lastIndex + 1 < currentIndex) {
            lastIndex = currentIndex;
        } else if (lastIndex > str.length - 1) {
            lastIndex = str.length - 1;
        }

        let result = '';
        for (let i = currentIndex; i <= lastIndex; i += 1) {
            result = `${result}${str[i]}`;
        }

        return result;
    };
}
//////////////////////////////////////////////////////
/////////// Third Solution //////////////////////////
//////////////////////////////////////////////////////
{
    const substr = (string, startS = 0, endS = string.length) => {
        /* eslint-disable no-console */
        let start = startS;
        let end = endS;
        let returnString = '';
        let counter = 0;
        if (end === 1) return string[start];
        if (end < 0) end = 1;
        if (end === 0 || start > end || string.length === 0) return '';
        if (startS < 0) start = 0;
        if (end > string.length) end = string.length - start;
        if (end === string.length && start > 0) {
            end = string.length - start;
        }

        while (counter < end) {
            returnString += `${string[start]}`;
            start += 1;
            counter += 1;
        }

        return returnString;
    };
}

//////////////////////////////////////////////////////
/////////// Master Solution //////////////////////////
//////////////////////////////////////////////////////

(function () {
    const subst = (str, index = 0, substrLength = str.length) => {
        if (index >= str.length) { // если начальный индекс выходит за границу слова справа,
            return ''; // то возвращаем пустую строку
        }

        // В учительском решении нормализация сводится к подготовке всего двух переменных:
        // currentIndex и lastIndex — они формируют диапазон,
        // из которого будет складываться итоговая подстрока.

        // определяем, где находится первый элемент (его позиция в str)
        // формируемой подстроки
        const currentIndex = index < 0 ? 0 : index;

        // определяем, где находится последний элемент (его позиция в str)
        // формируемой подстроки
        let lastIndex = currentIndex + (substrLength - 1);

        if (substrLength < 0) { // обрабатываем ситуацию, когда substrLength отрицателен
            lastIndex = currentIndex;
        } else if (lastIndex > str.length - 1) { // если конечный индекс выходит за границу строки,
            lastIndex = str.length - 1; // то считаем, что он равен индексу последнего элемента в str
        }

        // генерируем подстроку result,
        // "вырезая" её из исходной строки str
        let result = '';
        for (let i = currentIndex; i <= lastIndex; i += 1) {
            result = `${result}${str[i]}`;
        }
        return result;
    };
    subst('abba');
})();
