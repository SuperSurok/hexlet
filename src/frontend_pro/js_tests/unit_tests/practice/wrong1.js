class Validator {
    constructor() {
        this.checks = [];
    }

    addCheck(fn) {
        this.checks.push(fn);
    }

    isValid() {
        return false;
    }
}

module.exports = Validator;
