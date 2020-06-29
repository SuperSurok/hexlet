{
    const bubbleSort = (items) => {
        let count = items.length - 1;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < count; i += 1) {
                if (items[i] > items[i + 1]) {
                    let temp = items[i];
                    items[i] = items[i + 1];
                    items[i + 1] = temp;
                    swapped = true;
                }
            }
            count -= 1;
        } while (swapped)
        return items;
    }
    console.log(bubbleSort([3, 2, 10, -2, 0])); // => [ -2, 0, 2, 3, 10 ]
}


const numbers = [8, 3, 10];
// sort изменяет массив
numbers.sort((a, b) => a - b); // сортировка по возрастанию
console.log(numbers) // [3, 8, 10]

// Пузырьковая сортировка
// Функция изменяет входящий массив items
{
    const bubbleSort = (items) => {
        let stepsCount = items.length - 1;
        // Обявляем переменную swapped, значение которой показывает был ли
        // совршен обмен элементов во время перебора массива
        let swapped;
        // do..while цилк. Работает почти идентично while
        // Разница в проверке. Тут она делается не до выполнения, а после.
        // Такой цикл полезен там, где надо выполнить тело хотя бы раз в любом случае.
        do {
            swapped = false;
            // Перебираем массив и меняем местами элементы, если предыдущий
            // больше, чем следующий
            for (let i = 0; i < stepsCount; i += 1) {
                if (items[i] > items[i + 1]) {
                    // temp - временная переменная для хранения текущего элемента
                    let temp = items[i];
                    items[i] = items[i + 1];
                    items[i + 1] = temp;
                    // Если сработал if и была совершена перестановка,
                    // присваиваем swapped значение true
                    swapped = true;
                }
            }
            // Уменьшаем счетчик на 1, т.к. самый большой элемент уже находится
            // в конце массива
            stepsCount -= 1;
        } while (swapped);
        return items;
    }
    console.log(bubbleSort([3, 2, 10, -2, 0])); // => [ -2, 0, 2, 3, 10 ]
}