const functions = {
    pass: function factorial(num) {
        if (num === 0) {
            return 1;
        }
        return num * factorial(num - 1);
    },

    fail1: function factorial(num) {
        if (num === 1) {
            return 1;
        }
        return num * factorial(num - 1);
    },

    fail2: function factorial2(num) {
        if (num === 0) {
            return 1;
        }
        return true;
    },

    fail3: function factorial3(num) {
        if (num === 0) {
            return 1;
        } if (num < 4) {
            return num * factorial3(num - 1);
        }

        return num;
    },

    fail4: function factorial4(num) {
        if (num === 0) {
            return 1;
        } if (num === 2) {
            return 2;
        } if (num > 1) {
            return num * factorial4(num - 1);
        }
        return 0;
    },

    fail5: function factorial5(num) {
        if (num === 0) {
            return -1;
        }
        return Math.abs(num * factorial5(num - 1));
    },
};

export default functions[process.env.RESULT];
