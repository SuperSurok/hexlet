{
    const point = [3, 5];
    let [x, y] = point;
    // Слева массив повтроряет структуру правого массива,
    // но вместо значений используются идентификаторы
    // они заполняются значениями, стоящими на тех позициях в правом массиве
    // [x, y] = [3, 5]
    // x = 3, y = 5
}

{
    const point = [3, 5];
    // Извлекаем первый элемент
    // Остальные игнорируются
    const [x] = point;

    // Извлекаем второй элемент
    // Для этого просто не указываем первый
    const [, y] = point;
}

{
    // и даже так
    const [, secondElement, , fourthElelement, fithElement] = [1, 2, 3, 4, 5, 6,];
    console.log(secondElement);
    console.log(fourthElelement);
    console.log(fithElement);
}

{
    const [firstElement, secondElement, thirdElement] = [1, 2];
    console.log(`firstElement: ${firstElement}`); // => 1
    console.log(`secondElement ${secondElement}`); // => 2
    console.log(`thirdElement: ${thirdElement}`); // => undefined
}

{
    // Можно определить занчение по умолчанию
    const [firstElement, secondElement, thirdElement = 3] = [1, 2];
    console.log(`firstElement: ${firstElement}`); // => 1
    console.log(`secondElement ${secondElement}`); // => 2
    console.log(`default thirdElement: ${thirdElement}`); // => 3
}

{
    // Можно извлекать данные из массивов внутри массивов
    const [one, [two, three]] = [1, [2, 3]];
}

{
    const points = [
        [4, 3],
        [0, -3],
    ];
    for (const [x, y] of points) {
        console.log([x, y]);
    }

    const swapValues = ([a, b]) => [b, a];
    console.log(swapValues([1, 2]));
}