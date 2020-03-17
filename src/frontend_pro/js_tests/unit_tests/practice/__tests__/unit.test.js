const { isNumber } = require('lodash');
const getImpelementation = require('../index');

const makeValidator = getImpelementation();

/////////////////////////////////////////////////
///////////////// Solution //////////////////////
/////////////////////////////////////////////////
test('makeValidator', () => {
  const validator = makeValidator();
  validator.addCheck((v) => v > 5);
  expect(validator.isValid(3)).toBe(false);
  expect(validator.isValid(6)).toBe(true);

  validator.addCheck(isNumber);
  expect(validator.isValid('value')).toEqual(false);
  expect(validator.isValid(100)).toBe(true);
});

/////////////////////////////////////////////////
///////////////// Master Solution ///////////////
/////////////////////////////////////////////////

test('validator_master', () => {
  const validator = makeValidator();
  expect(validator.isValid('value')).toBe(true);

  validator.addCheck(isNumber);
  validator.addCheck((v) => v > 10);
  validator.addCheck((v) => v % 2 === 0);

  expect(validator.isValid(false)).toBe(false);
  expect(validator.isValid('string')).toBe(false);
  expect(validator.isValid(8)).toBe(false);
  expect(validator.isValid(11)).toBe(false);

  expect(validator.isValid(12)).toBe(true);
  expect(validator.isValid(100)).toBe(true);
});