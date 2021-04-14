import fs from 'fs';
import async from 'async';

const { waterfall } = async;

/// /////////////////////////////////////
/// ///// First Solution ////////////////
/// /////////////////////////////////////

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  waterfall(
    [
      function first(callback) {
        fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
          callback(error1, data1);
        });
      },
      function second(data1, callback) {
        fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
          callback(error2, data1, data2);
        });
      },
      function third(data1, data2, callback) {
        fs.writeFile(outputPath, `${data1}${data2}`, (error3) => {
          callback(error3, `${data1}${data2}`);
        });
      },
    ],
    cb,
  );
};

const unionFilesMaster = (inputPath1, inputPath2, outputPath, cb) => {
  waterfall(
    [
      (callback) => fs.readFile(inputPath1, callback),
      (data1, callback) => fs.readFile(inputPath2, (err, data2) => callback(err, data1, data2)),
      (data1, data2, callback) => fs.writeFile(outputPath, `${data1}${data2}`, callback),
    ],
    cb,
  );
};
