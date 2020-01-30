
const getFunction = require('../functions');
const get = getFunction();
//////////////////////////////////////////////////////
///////////////// First Solution /////////////////////
//////////////////////////////////////////////////////
{
    if (get({key: 'value'}, 'key') !== 'value') {
        throw new Error('Error!');
    }
    if (get({}, 'value', 'defaultValue') !== 'defaultValue') {
        throw new Error('Error!');
    }
    if (get({key: 'value'}, 'key', 'defaultValue') !== 'value') {
        throw new Error('Error!');
    }

}

//////////////////////////////////////////////////////
///////////////// Master Solution /////////////////////
//////////////////////////////////////////////////////
{
// BEGIN
    if (get({key: 'value'}, 'key') !== 'value') {
        throw new Error('boom!');
    }
    if (get({}, 'key', 'value') !== 'value') {
        throw new Error('boom!');
    }
    if (get({key: 'value'}, 'key', 'default value') !== 'value') {
        throw new Error('boom!');
    }
}