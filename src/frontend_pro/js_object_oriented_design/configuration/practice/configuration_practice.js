const hasNumber = (string) => string.search(/\d/) !== -1;

/// /////////////////////////////////////
/// ///// First Solution ////////////////
/// /////////////////////////////////////

class PasswordValidator {
  constructor({ minLength = 8, containNumbers = true } = {}) {
    this.minLength = minLength;
    this.containNumbers = containNumbers;
  }

  validate(password) {
    const passLength = password.length;
    const countNumbers = password.replace(/[^0-9]/g, '').length < 1;
    const minLength = passLength < this.minLength ? 'too small' : false;
    let containNumbers;

    if (this.containNumbers) {
      containNumbers = countNumbers ? 'should contain at least one number' : false;
    } else {
      containNumbers = false;
    }

    if (!minLength && !containNumbers) return {};
    if (minLength && !containNumbers) {
      return {
        minLength,
      };
    }
    if (minLength && containNumbers) {
      return {
        minLength,
        containNumbers,
      };
    }
  }
}

class PasswordValidatorMaster {
  constructor(options = {}) {
    const defaultValues = {
      minLength: 8,
      containNumbers: true,
    };

    this.options = { ...defaultValues, ...options };
  }

  validate(password) {
    const errors = {};
    if (password.length < this.options.minLength) {
      errors.minLength = 'too small';
    }
    if (this.options.containNumbers) {
      if (!hasNumber(password)) {
        errors.containNumbers = 'should contain at leas one number';
      }
    }

    return errors;
  }
}
