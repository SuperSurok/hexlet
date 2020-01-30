// Spread оператор распаковывает объект на отдельные
// аргументы.

const sum = (...numbers) => {
    let result = 0;
    for (const num of numbers) {
        result += num;
    }
    return result;
};

const arrayOfNumbers = [1, 7, 4];
sum(...arrayOfNumbers); // 12
// Иначе
sum(arrayOfNumbers[0], arrayOfNumbers[1], arrayOfNumbers[2]);

// Может использоваться совместно с позиционными элементами,
// необязательно должен быть последним
sum(8, ...arrayOfNumbers); // 20
sum(8, ...arrayOfNumbers, 10); // 30
sum(...arrayOfNumbers, 8, 10, 70); // 100

// Может быть любое количество spread операторов и в любом порядке
const arr1 = [1, 7, 4];
const arr2 = [5, 5];

// sum (1, 7, 4, 5, 5);
sum(...arr1, ...arr2); // 22

// sum(5, 5, 1, 7, 4)
sum(...arr2, ...arr1); // 22

// sum(8, 1, 7, 4, 10, 5, 5);
sum(8, ...arr1, 10, ...arr2); // 40