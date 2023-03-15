import Joi, { ObjectSchema } from 'joi';

const productsSchema: ObjectSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const schemas = {
  productsSchema,
};

export default schemas;
