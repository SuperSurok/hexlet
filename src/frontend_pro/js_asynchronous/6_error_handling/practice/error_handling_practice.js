import fs from 'fs';

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
export const move = (pathToOrigin, pathToCopy, cb) => {
    fs.readFile(pathToOrigin, 'utf-8', (_error1, data1) => {
        if (_error1) {
            cb(_error1);
            return;
        }
        fs.writeFile(pathToCopy, data1, (_error2) => {
            if (_error2) {
                cb(_error2);
                return;
            }
            fs.unlink(pathToOrigin, cb);
        });
    });
};

////////////////////////////////////////
//////// Second Solution ///////////////
////////////////////////////////////////
export const moveMaster = (from, to, cb) => {
    fs.readFile(from, 'utf-8', (error1, data) => {
        if (error1) {
            cb(error1);
            return;
        }
        fs.writeFile(to, data, (error2) => {
            if (error2) {
                cb(error2);
                return;
            }
            fs.unlink(from, cb);
        });
    });
};