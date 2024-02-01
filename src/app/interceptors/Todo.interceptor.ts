import * as Joi from 'joi';

export const TodoSchema = Joi.object({
  id: Joi.number(),
  status: Joi.string().valid('TODO', 'DOING', 'DONE'),
  color: Joi.string().optional(),
  backgroundColor: Joi.string().optional(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
});

export const IdSchema = Joi.object({
  id: Joi.object(),
}).unknown(true);
