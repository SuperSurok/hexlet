const _ = require('lodash');

const functions = {
    right1: _.indexOf,
    wrong1: (items) => items[0],
    wrong2: (items, value) => items.indexOf(value) + 1,
    wrong3: (items, value) => {
        const index = items.indexOf(value);
        return index === -1 ? 0 : index;
    },
};

module.exports = () => {
    const name = process.env.FUNCTION_VERSION || 'right1';
    return functions[name];
};