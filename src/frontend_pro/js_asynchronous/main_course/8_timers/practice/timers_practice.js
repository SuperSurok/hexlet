import fs from 'fs';

/// /////////////////////////////////////
/// ///// First Solution ////////////////
/// /////////////////////////////////////

const watcher = (filepath, time, cb) => {
  let lastTime = Date.now();
  const timerId = setTimeout(
    () => fs.stat(filepath, (error, stats) => {
      if (error) {
        clearInterval(timerId);
        cb(error);
        return;
      }
      if (stats.mtimeMs > lastTime) {
        lastTime = stats.mtimeMs;
        cb(null);
      }
    }),
    time,
  );
  return timerId;
};

/// /////////////////////////////////////
/// ///// Master Solution ///////////////
/// /////////////////////////////////////

const watcherMaster = (filepath, time, cb) => {
  let lastCheckTime = Date.now();

  const check = (timerId) => {
    fs.stat(filepath, (error, stats) => {
      if (error) {
        clearInterval(timerId);
        cb(error);
        return;
      }
      const { mtimeMs } = stats;
      if (mtimeMs > lastCheckTime) {
        cb(null);
        lastCheckTime = mtimeMs;
      }
    });
  };

  const timerId = setInterval(() => check(timerId), time);
  return timerId;
};
