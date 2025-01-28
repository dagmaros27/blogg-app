const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateRequest = (fields, body) => {
  const errors = [];
  fields.forEach((field) => {
    if (!body[field]) {
      errors.push(`${field} is required`);
    }
  });
  return errors;
};

module.exports = {
  validateEmail,
  validateRequest,
};
