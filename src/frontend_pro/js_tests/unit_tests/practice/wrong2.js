class Validator {
    constructor() {
        this.checks = [];
    }

    addCheck() {
    }

    isValid(data) {
        return this.checks.every((fn) => fn(data));
    }
}

module.exports = Validator;
