import path from 'path';
import _ from 'lodash';
import fs from 'fs/promises';

////////////////////////////////////////
//////// First Solution ////////////////
////////////////////////////////////////

const getDirectorySize = (pathdir) => {
  const content = fs.readdir(pathdir);
  const joinPaths = content.then((pathitem) =>
    pathitem.map((item) => path.join(pathdir, item)),
  );
  const statPaths = joinPaths.then((paths) => Promise.all(paths.map(fs.stat)));
  const filesArr = statPaths.then((files) =>
    files.filter((file) => !file.isDirectory()),
  );
  return filesArr.then((files) => _.sumBy(files, 'size'));
};

////////////////////////////////////////
//////// Master Solution ///////////////
////////////////////////////////////////

const getDirectorySizeMaster = (pathdir) => {
  const promise = fs.readdir(pathdir).then((filenames) => {
    const filesStat = filenames.map((filename) => path.join(pathdir, filename));
    const promises = filesStat.map(fs.stat);
    return Promise.all(promises);
  });

  return promise.then((stats) =>
    _.sumBy(
      stats.filter((filestat) => !filestat.isDirectory()),
      'size',
    ),
  );
};
