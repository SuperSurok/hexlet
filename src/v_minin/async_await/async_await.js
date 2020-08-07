const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
};

const url = 'https://jsonplaceholder.typicode.com/todos/';

const fetchTodos = () => {
    console.log('Fetch todo was started...')
    return delay(2000)
        .then(() => fetch(url))
        .then(response => response.json());
};

fetchTodos().then(data => console.log(data)).catch(e => console.error(e));

const fetchAsync = async () => {
    console.log('Fetch started with async');
    try {
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.error('error', e);
    }
};

fetchAsync();