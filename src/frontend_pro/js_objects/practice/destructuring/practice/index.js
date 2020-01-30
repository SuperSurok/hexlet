// Реализуйте и экспортируйте по умолчанию функцию getSortedNames,
// которая принимает на вход список пользователей, извлекает их имена,
// сортирует и возвращает отсортированный список имен.
const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    const getSortedNames = (data) => {
        const result = [];
        for (const item of data) {
            const {name} = item;
            result.push(name);
        }
        return result.sort();
    };
    getSortedNames(users);
}

//////////////////////////////////////////////////////
///////////////// Second Solution ////////////////////
//////////////////////////////////////////////////////
{
    const getSortedNames = (list) => {
        let result = [];
        for (const item of list) {
            if (item.hasOwnProperty('name')) {
                result.push(item['name']);
            }
        }
        return result.sort();
    };
}

//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////

{
    const getSortedNames = (data) => {
        const result = [];
        for (const { name } of data) {
            result.push(name);
        }
        return result.sort()
    };
    getSortedNames(users);
}