import fs from "fs";

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
export const compareFileSize = (file1, file2, cb) => {
  fs.stat(file1, (_err, stat1) => {
    fs.stat(file2, (_err, stat2) => {
      if (stat1 === stat2) return cb(null, 0);
      if (stat1 > stat2) return cb(null, 1);
      if (stat1 < stat2) return cb(null, -1);
    })
  })
};

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
export const compareFileSizesMaster = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (_error1, { size: size1 }) => {
    fs.stat(filepath2, (_error2, { size: size2 }) => {
      cb(null, Math.sign(size1 - size2));
    });
  });
};
