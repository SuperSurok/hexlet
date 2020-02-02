const capitalize = (list) => {
    const firsLetter = list.charAt(0).toUpperCase();
    const slicedString = list.slice(1);
    return `${firsLetter}${slicedString}`;
};

module.exports.capitalize = capitalize;