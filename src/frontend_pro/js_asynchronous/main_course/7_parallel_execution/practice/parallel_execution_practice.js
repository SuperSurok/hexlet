import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////

const getDirectorySize = (pathFiles, cb) => {
  fs.readdir(pathFiles, (error1, data) => {
    if (error1) {
      cb(error1);
      return;
    }
    const pathList = data.map((item) => path.join(pathFiles, item));
    async.map(pathList, fs.stat, (error2, stats) => {
      if (error2) {
        return;
      }
      const result = _.sumBy(
        stats.filter((item) => !item.isDirectory()),
        'size',
      );
      cb(null, result);
    });
  });
};

getDirectorySize(
  '/Users/cometrica/projects/hexlet/src/frontend_pro/js_asynchronous/7_parallel_execution/practice',
  (err, size) => {
    console.log(size);
  },
);

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////

export const getDirectorySizeMaster = (dirpath, cb) => {
  fs.readdir(dirpath, (error1, filenames) => {
    if (error1) {
      cb(error1);
      return;
    }
    const filepaths = filenames.map((name) => path.join(dirpath, name));
    async.map(filepaths, fs.stat, (error2, stats) => {
      if (error2) {
        cb(error2);
        return;
      }
      const sum = _.sumBy(
        stats.filter((stat) => stat.isFile()),
        'size',
      );
      cb(null, sum);
    });
  });
};

getDirectorySizeMaster(
  '/Users/cometrica/projects/hexlet/src/frontend_pro/js_asynchronous/7_parallel_execution/practice',
  (err, size) => {
    console.log(size);
  },
);
