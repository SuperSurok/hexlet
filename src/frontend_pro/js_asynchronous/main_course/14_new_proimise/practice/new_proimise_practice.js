/// /////////////////////////////////////
/// ///// First Solution ////////////////
/// /////////////////////////////////////

const wait = (sec) => {
  const promise = new Promise((resolve) => setTimeout(() => resolve(), sec));
  return promise;
};
wait(150).then(console.log('Timer'));
/// /////////////////////////////////////
/// ///// Master Solution ///////////////
/// /////////////////////////////////////

const waitMaster = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
waitMaster(150).then(console.log('Timer'));
