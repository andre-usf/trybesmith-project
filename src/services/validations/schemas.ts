import Joi, { ObjectSchema } from 'joi';

const productsSchema: ObjectSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const userSchema: ObjectSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const schemas = {
  productsSchema,
  userSchema,
};

export default schemas;
