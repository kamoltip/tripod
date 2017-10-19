const validator = require('validator');

module.exports = {

  validateSignupForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
      isFormValid = false;
      errors.email = 'Please provide a correct email address.';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
      isFormValid = false;
      errors.password = 'Password must have at least 8 characters.';
    }

    if (!payload || typeof payload.agree !== 'string' || payload.agree.trim() !== 'on') {
      isFormValid = false;
      errors.name = 'Must agree to Terms & Conditions to sign up with Tripod';
    }

    if (!isFormValid) {
      message = 'Check the form for errors.';
    }

    return { success: isFormValid, message, errors };
  },

  validateLoginForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
      isFormValid = false;
      errors.username = 'Please provide your email address.';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
      isFormValid = false;
      errors.password = 'Please provide your password.';
    }

    if (!isFormValid) {
      message = 'Check the form for errors.';
    }

    return { success: isFormValid, message, errors };
  },
};
