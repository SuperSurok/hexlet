// Функция высшего порядка принимает на вход функцию
// или возвращает функцию или делает и то и другое.

// callback - передача функции

const users = [
    {name: 'Igor', age: 19},
    {name: 'Danil', age: 1},
    {name: 'Vovan', age: 4},
    {name: 'Matviey', age: 16},
];

const result = users.sort((a, b) => {
    if (a.age === b.age) return 0;
    return a.age > b.age ? 1 : 0;
});

{
    const say = (fn) => {
        const message = fn();
        console.log(message);
    };
    // Или
    // const say = (fn) => console.log(fn());

    const myCallabckFn = () => 'hi!';
    say(myCallabckFn);
    // Или
    // say(() => 'hi!');
}

// Canonical
const getJsFiles = (dir) => fs.readdirSync(dir)
    .filter((fileName) => fileName.endsWith('js'))
    .map((fileName) => path.resolve(dir, filename));