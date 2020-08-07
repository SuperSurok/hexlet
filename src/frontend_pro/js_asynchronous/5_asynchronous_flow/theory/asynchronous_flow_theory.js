import path from 'path'
import fs from 'fs';

const getFileOwners = (dirpath, cb) => {
    fs.readdir(dirpath, (_error1, filenames) => {
        const readFileStat = (items, result = []) => {
            if (_error1) {
                console.log(_error1);
            }
            if (items.length === 0) {
                // Обработку ошибок пока не рассматриваем
                cb(null, result);
                return;
            }
            const [first, ...rest] = items;
            const filepath = path.join(dirpath, first);
            fs.stat(filepath, (_error2, stat) => {
                readFileStat(rest, [...result, {filename: first, owner: stat.uid}]);
            });
        };
        readFileStat(filenames);
    });
};

getFileOwners('/src', (_err, data) => console.log(data));