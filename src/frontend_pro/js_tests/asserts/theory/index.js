const assert = require('assert');
const capitalize = require('../../utils').capitalize;

assert.equal(capitalize(''), '');
assert.equal(capitalize('hello'), 'Hello');

// Функция equal(actual, expected) проверяет равенство по ссылке.
// То есть два разных объекта, имеющих одинаковое содержание, рассматриваются,
// как не эквивалентные:
assert.equal({}, {});
assert.equal({key: 'value'}, {key: 'value'});

// Для сравнения по значению используется ещё одно утверждение: assert.deepEqual(actual, expected).
// Оно опирается только на содержимое:
assert.deepEqual({}, {});
assert.deepEqual({key: 'value'}, {key: 'value'});
assert.deepEqual({key: 'value'}, {key: 'another value'});

// Для тестирования негативных сценариев
// предназначены функции:
//              assert.notEqual(actual, expected) и
//              assert.notDeepEqual(actual, expected).
//              Они тестируют то, что значения не равны.