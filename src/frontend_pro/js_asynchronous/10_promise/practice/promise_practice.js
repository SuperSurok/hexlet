import {promises as fs} from 'fs';

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
export const reverse1 = (filepath) => fs.readFile(filepath, 'utf-8')
    .then((data1) => data1.split('\n').reverse().join('\n'))
    .then((data2) => fs.writeFile(filepath, data2));

////////////////////////////////////////
//////// Third Solution ////////////////
////////////////////////////////////////
export const reverse = (filepath) => fs.readFile(filepath, 'utf-8')
    .then((data1) => {
        const newData = data1.split('\n').reverse().join('\n');
        return fs.writeFile(filepath, newData);
    });


////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
export const reverseMaster = (filepath) => fs.readFile(filepath, 'utf-8')
    .then((data) => {
        const preparedData = data.split('\n').reverse().join('\n');
        return fs.writeFile(filepath, preparedData);
    });
