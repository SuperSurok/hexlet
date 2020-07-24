const {fs} = require('fs');

const print = (file) => {
    const callBack = (_error, data) => console.log(data);
    return fs.readFile(file, 'utf-8', callBack);
};