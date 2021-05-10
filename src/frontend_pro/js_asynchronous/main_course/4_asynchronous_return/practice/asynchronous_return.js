import fs from 'fs';

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
const write = (pathFile, data, cb) => {
    fs.writeFile(pathFile, data, (error) => {
        if (error) throw error;
        cb(error, data);
    })
};

export default write;

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
    const write = (pathFile, data, cb) => {
        fs.writeFile(pathFile, data, cb);
    };
}