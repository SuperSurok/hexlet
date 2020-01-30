const substr = (string, index = 0, substrLength = string.length) => {
    if (index > string.length) {
        return '';
    }
    const currentIndex = index < 0 ? 0 : index;
    let lastIndex = currentIndex + (substrLength - 1);
    if (substrLength < 0) {
        lastIndex = currentIndex;
    } else if (lastIndex > string.length - 1) {
        lastIndex = string.length - 1;
    }

    let result = '';
    for (let i = currentIndex; i <= lastIndex; i += 1) {
        result = `${result}${string[i]}`;
    }
    return result;
};

const a = substr('abba', -1, -2);