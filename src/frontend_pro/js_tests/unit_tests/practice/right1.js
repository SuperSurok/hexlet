class Validator {
    constructor() {
        this.checks = [];
    }

    addCheck(fn) {
        this.checks.push(fn);
    }

    isValid(data) {
        return this.checks.every((fn) => fn(data));
    }
}

module.exports = Validator;
