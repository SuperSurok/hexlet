import fs from "fs";

export const compareFileSize = (file1, file2, cb) => {
  fs.stat(file1, (_err, {size: size1}) => {
    fs.stat(file2, (_err, {size: size2}) => {

    })
  })
};