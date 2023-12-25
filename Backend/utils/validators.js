const Joi = require('joi');
const { login } = require('../services/authService');

const signupSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  phoneNumber: Joi.string().pattern(/^[6-9]\d{9}$/).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});

const validateSignup = (data) => {
  return signupSchema.validate(data);
};
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});
const validateLogin = (data) => {
  return loginSchema.validate(data);
}

module.exports = {
  validateSignup,
  validateLogin,
};

