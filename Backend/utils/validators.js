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
// schema for preferences.
const preferenceSchema = Joi.object({
  language: Joi.string().allow(null),
  breakfast: Joi.string().allow(null),
  lunch: Joi.string().allow(null),
  dinner: Joi.string().allow(null),
  wakeTime: Joi.string().allow(null),
  bedTime: Joi.string().allow(null),
  weight: Joi.string().allow(null),
  height: Joi.string().allow(null),
  bloodGlucose: Joi.string().allow(null),
  cholestrol: Joi.string().allow(null),
  bloodPressure: Joi.string().allow(null),
  distance: Joi.string().allow(null),
  systemEmails: Joi.boolean().allow(null),
  memberServiceEmails: Joi.boolean().allow(null),
  sms: Joi.boolean().allow(null),
  phoneCall: Joi.boolean().allow(null),
  post: Joi.boolean().allow(null),
})
const validatePreferencesUpdate = (data) => {
  return preferenceSchema.validate(data, {abortEarly:false});
}

// Validation schema for basic details.
const basicDetailsSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  socialSecurityNumber: Joi.number(),
  mobileNumber: Joi.string().pattern(/^[6-9]\d{9}$/),
  addressOne: Joi.string().required(),
  addressTwo: Joi.string(), 
  city: Joi.string().required(),
  state: Joi.string().required(),
  zip: Joi.number().required(),
});
const validateBasicDetails = (data) =>{
  return basicDetailsSchema.validate(data, {abortEarly: false}); 
}
const personalDetailsSchema = Joi.object({
  dob: Joi.string().required(),
  gender: Joi.string().required(),
  maritalStatus: Joi.string().allow(''),
  socialSecurityNumber: Joi.string().allow(''),
  social: Joi.string().allow(''),
  kids: Joi.number().allow(''),
});
const validatePersonalDetails= (data)=>{
  return personalDetailsSchema.validate(data, {abortEarly : false});
  }


module.exports = {
  validateSignup,
  validateLogin,
  validateChangePassword,
  validatePreferencesUpdate,
  validateBasicDetails,
  validatePersonalDetails,
};

