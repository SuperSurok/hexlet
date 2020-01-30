const users = [
    { name: 'Igor', age: 19 },
    { name: 'Danil', age: 1 },
    { name: 'Vovan', age: 4 },
    { name: 'Matvey', age: 16 },
];

const result = [];

// Фильтрация через цикл
for (const user of users) {
    if (user.age > 10) {
        result.push(user);
    }
}

// Фильтрация через filter
const filteredUsers = users.filter((user) => user.age > 10);
const filteredUsersDestructuring = users.filter(({ age }) => age > 10);

// Собственная функция реализующая фильтрацию
const myFilter = (callback, collection) => {
    const result = [];
    for (const item of collection) {
        // Предикат используется только для проверки
        // Внутрь callback по очереди передается каждый элемент коллекции collection
        if (callback(item)) {
            // В результат всегда добавляется элемент исходной коллекции
            result.push(item);
        }
    }
    return result;
};