/// /////////////////////////////////////
/// ///// First Solution ////////////////
/// /////////////////////////////////////
const promisify = (asyncFn) => (...args) => new Promise((resolve, reject) => {
  asyncFn(...args, (err, data) => (err ? reject(err) : resolve(data)));
});

/// /////////////////////////////////////
/// ///// Master Solution ///////////////
/// /////////////////////////////////////
const promisifyMaster = (asyncFn) => (...args) => new Promise((resolve, reject) => {
  asyncFn(...args, (err, data) => (err ? reject(err) : resolve(data)));
});
