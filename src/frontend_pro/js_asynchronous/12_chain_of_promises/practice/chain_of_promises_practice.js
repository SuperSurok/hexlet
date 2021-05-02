import fs from 'fs/promises';

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////

const getTypes = (filepaths) => {
  const initPromise = Promise.resolve([]);
  return filepaths.reduce((acc, path) => acc.then((contents) => fs.stat(path)
    .then((data) => {
      if (data.isDirectory()) return contents.concat('directory');
      if (!data.isDirectory()) return contents.concat('file');
      return null;
    })
    .catch(() => contents.concat(null))), initPromise);
};

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////
const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

const getTypesMaster = (filesPath) => {
  // функция получает путь и аккумулятор из reduce, выполняет попытку получить stat,
  // добавляет в аккумулятор строку или null и возвращает обновлённый аккумулятор
  const processPath = (filepath, result) => fs.stat(filepath)
    .then((data) => [...result, getTypeName(data)])
    .catch(() => [...result, null]);

  const resultPromise = filesPath.reduce(
    // promise - это аккумулятор, обёрнутый в промис, поэтому на нём вызывается then
    // result - предыдущее значение аккумулятора
    (promise, filepath) => promise.then((result) => processPath(filepath, result)),
    Promise.resolve([]),
  );
  return resultPromise;
};
