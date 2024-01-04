const Joi = require('joi');
// Validation schema for signup
const signupSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  phoneNumber: Joi.string().pattern(/^[6-9]\d{9}$/).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});

// signup function for validation.
const validateSignup = (data) => {
  return signupSchema.validate(data, { abortEarly: false });
};

//Validation schema for Login.
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});
const validateLogin = (data) => {
  return loginSchema.validate(data, { abortEarly: false });
}

// Schema for change password.
const changePasswordSchema = Joi.object({
  oldPassword: Joi.string().min(8).required(),
  newPassword: Joi.string().min(8).required(),
  repeatNewPassword: Joi.string().valid(Joi.ref('newPassword')).required(),
})
const validateChangePassword = (data) => {
  return changePasswordSchema.validate(data, { abortEarly: false }); 
}
module.exports = {
  validateSignup,
  validateLogin,
  validateChangePassword,
};

