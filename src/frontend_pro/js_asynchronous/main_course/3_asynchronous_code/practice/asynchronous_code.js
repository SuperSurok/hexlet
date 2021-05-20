import * as fs from 'fs';

/// /////////////////////////////////////
///  First Solution /////////////////////
/// /////////////////////////////////////
{
  const print = (file) => {
    const callBack = (_error, data) => console.log('print1: ', data);
    return fs.readFile(file, 'utf-8', callBack);
  };
  print(
    '/Users/cometrica/projects/hexlet/src/frontend_pro/js_asynchronous/3_asynchronous_code/practice/asynchronous_code.js',
  );
}
/// /////////////////////////////////////
/// ///// Third Solution ////////////////
/// /////////////////////////////////////
{
  const print = (filepath) => fs.readFile(filepath, 'utf-8', (_err, data) => console.log('print2: ', data));
  print(
    '/Users/cometrica/projects/hexlet/src/frontend_pro/js_asynchronous/3_asynchronous_code/practice/asynchronous_code.js',
  );
}
