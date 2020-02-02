//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
const assert = require('assert');
const getFunction = require('./functions');

const take = getFunction();

{
    assert.deepEqual(take([1, 2, 3], 2), [1, 2]);
    assert.notDeepEqual(take([1, 2]), [1, 2]);
    assert.deepEqual(take([4, 3, 3], 4), [4, 3, 3]);
    assert.deepEqual(take([4, 3], 9), [4, 3]);
}
//////////////////////////////////////////////////////
///////////////// Second Solution ////////////////////
//////////////////////////////////////////////////////
{
    assert.deepEqual(take([1, 2, 3], 2), [1, 2]);
    assert.deepEqual(take([1, 2]), [1]);
    assert.deepEqual(take([4, 3, 3], 4), [4, 3, 3]);
    assert.deepEqual(take([4, 3], 9), [4, 3]);
}
//////////////////////////////////////////////////////
///////////////// Master Solution ////////////////////
//////////////////////////////////////////////////////
{
    assert.deepEqual(take(['one', 'two', 8], 9), ['one', 'two', 8]);
    assert.deepEqual(take([1, 2]), [1]);
    assert.deepEqual(take(['one', 'two', 'three'], 2), ['one', 'two']);
    assert.deepEqual(take([]), []);
}