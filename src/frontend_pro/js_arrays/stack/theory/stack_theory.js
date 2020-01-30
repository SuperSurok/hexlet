const checkIfBalanced = (expression) => {
    // Инициализируем стек
    const stack = [];
    // Созадём из входящего набоа символов символов
    const symbols = expression.split('');
    // Инициализируем набор открывающих символов
    const firstSymbols = ['(', '<', '{', '['];
    // Инициализируем набор парных символов
    const pairs = ['()', '<>', '{}', '[]'];
    // Проходим по массиву всех символов
    for (const currentSymbol of symbols) {
        // Если набор открывающих символов содержит текущий симвоа,
        // добавляем его в стек
        if (firstSymbols.includes(currentSymbol)) {
            stack.push(currentSymbol);
        // Иначе переходим в ветку else
        } else {
            // Сохраняем последний символ стека в переменную
            const previousSymbol = stack.pop();
            // Создаём пару из последнего символа стека и текушего элемента,
            // считаем, что следующий элемент это закрывающий символ
            const pair = `${previousSymbol}${currentSymbol}`;
            // Если набор парных символов не содержит пару симвлово pair,
            // Если пара входит в набор, всё правильно, идёи дальше.
            // Если не, то это означает, что символы не сбалансированы.
            if (!pairs.includes(pair)) return false;
        }
    }
    // Длина стека должна равняться нолю.
    return stack.length === 0;
};

console.log(checkIfBalanced('['));
console.log(checkIfBalanced('}{'));
console.log(checkIfBalanced('(([<>]){})'));
console.log(checkIfBalanced('([{]})'));