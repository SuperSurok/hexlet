import { promises as fs } from "fs";

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////
{
  export const reversePromise = (filepath) => {
    return fs.readFile(filepath, 'utf-8')
      .then((data1) => data1.split('\n').reverse().join('\n'))
      .then((data2) => fs.writeFile(filepath, data2));
  };
}
////////////////////////////////////////
//////// Second Solution ////////////////
////////////////////////////////////////
{
  export const reversePromise = (filepath) =>
    fs
      .readFile(filepath, "utf-8")
      .then((data1) => data1.split("\n").reverse().join("\n"))
      .then((data2) => fs.writeFile(filepath, data2));
}

////////////////////////////////////////
//////// Third Solution ////////////////
////////////////////////////////////////
{
  export const reversePromise = (filepath) =>
    fs.readFile(filepath, "utf-8").then((data1) => {
      const newData = data1.split("\n").reverse().join("\n");
      return fs.writeFile(filepath, newData);
    });
}

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
{
  export const reversePromiseMaster = (filepath) =>
    fs.readFile(filepath, "utf-8").then((data) => {
      const preparedData = data.split("\n").reverse().join("\n");
      return fs.writeFile(filepath, preparedData);
    });
}
