console.log('Request Data');
// Обычный асинхронный запрос
setTimeout(() => {
    console.log('Preparing data');

    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working',
    };

    setTimeout(() => {
        backendData.mod = true;
        console.log('Data received:', backendData);
    }, 2000)
}, 2000)

const promise = new Promise((resolve, reject) => {
    // resolve - вызвается после успешного окончания операции
    // reject - вызывается в случае ошибки
    setTimeout(() => {
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working',
        };
        resolve(backendData);
    }, 2000)
});

promise.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.mod = true;
            resolve(data);
        }, 2000)
    });
})
    .then(clientData => {
        console.log('Client data received', clientData);
        clientData.fromPromise = true;
        return clientData;
    })
    .then(data => {
        console.log('Modified:', data);
    })
    .catch(err => console.log('Error', err))
    .finally(() => console.log('Finally'));

const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

sleep(2000).then(() => console.log('After two seconds'));
sleep(3000).then(() => console.log('After three seconds'));

Promise.all([sleep(2000), sleep(5000)])
    .then(() => console.log('Promise .all was completed'));

Promise.race([sleep(2000), sleep(5000)])
    .then(() => console.log('Race promises'));