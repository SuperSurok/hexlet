const right1 = require('./right1');
const wrong1 = require('./wrong1');
const wrong2 = require('./wrong2');
const wrong3 = require('./wrong3');

const implementations = {
  right1, wrong1, wrong2, wrong3,
};

module.exports = () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return () => new implementations[name]();
};
