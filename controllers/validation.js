// import @hapi/joi
const Joi = require("@hapi/joi");

// const onError = (x) => {
//   switch (x[0].type) {
//     case 'any.required': {
//       return new Error('this input is required')
//     }
//     case 'string.regex'
//   }
// };

// create function registerValidation
const registerValidation = (data) => {
  // create Joi.object and define validation rules
  const schema = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  });
  
  //return validation on schema
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  });

  return schema.validate(data);
};

module.exports = {
  registerValidation,
  loginValidation,
};