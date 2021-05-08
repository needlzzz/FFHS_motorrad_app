// import @hapi/joi
const Joi = require("@hapi/joi");

// create function registerValidation
const registerValidation = (data) => {
  // create Joi.object and define validation rules
  const schema = Joi.object({
    name: Joi.string()
      .min(6)
      .max(50)
      .required()
      .messages({
        'string.min': 'The name needs to be of at least 6 characters',
        'string.max': 'The name needs to be of maximum 50 characters',
      }),
    email: Joi.string()
      .required()
      .email()
      .messages({
        'string.email': 'The email-address is not valid. Please try again',
      }),
    password: Joi.string()
      .min(6)
      .max(20)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)
      .required()
      .messages({
        'string.min': 'The password needs to be of at least 6 characters',
        'string.max': 'The password needs to be of maximum 20 characters',
        'string.pattern.base': 'The password needs to contain at least 1 lower-, 1 uppercase letter and 1 number',
      }),
  });
  
  // //write in console the validation error messages with no early
  // const valResult= schema.validate(data, { abortEarly: false })
  // console.log(valResult.error.details.map(errDetail => errDetail.type), valResult.error);
  
  //return validation on schema
  return schema.validate(data);
};


// needs to be improved; the validation should not be necessary?
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email()
      .messages({
        'string.email': 'The email-address is not valid. Please try again',
      }),
    password: Joi.string()
      .min(6)
      .max(20)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)
      .required()
      .messages({
        'string.min': 'The password needs to be of at least 6 characters',
        'string.max': 'The password needs to be of maximum 20 characters',
        'string.pattern.base': 'The password needs to contain at least 1 lower-, 1 uppercase letter and 1 number',
      }),
  });

  return schema.validate(data);
};

module.exports = {
  registerValidation,
  loginValidation,
};