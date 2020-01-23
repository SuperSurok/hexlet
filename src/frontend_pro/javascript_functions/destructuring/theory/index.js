// Деструктуризация - получение определённого значения из объекта

// Деструктуризация массива
// Обращение по индексам
{
    const func = (arr) => {
        console.log(arr[0]);
        console.log(arr[1]);
    };
    // let arr = [1, 2];
    func(arr);
    // => 1
    // => 2
}

// Деструктуризация в теле функции
{
    const func = (arr) => {
        const [first, second] = arr;
        console.log(first);
        console.log(second);
    };
    // let arr = [1, 2];
    func([1, 2])
    // => 1
    // => 2
}

// Деструктуризация входного аргумента для параметра
{
    const fun = ([first, second]) => {
        console.log(first);
        console.log(second);
    };
    // let [first, second] = [1, 2];
    func([1, 2]);
    // => 1
    // => 2

    // При этом действуют все стандартные правила деструктуризации массива:
    const arr = [1, 2];
    // let [first, second] = arr;
    func(arr);
    // => 1
    // => 2

    // let [first, second] = arr;
    func([1]);
    // => 1
    // => undefined

    // let [first, second] = arr;
    func([]);
    // => undefined
    // => undefined
}

// Если в передаваемом массиве меньше двух элементов,
// недостающим значениям будет присвоено undefined.
// Для подстраховки можно задать значение по умолчанию
{
    const func = ([first = 555, second = 777]) => {
        console.log(first);
        console.log(second);
    };
    // [first = 666, second = 777] = [1];
    func([1]);
    // => 1
    // => 777
}
