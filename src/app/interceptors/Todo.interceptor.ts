import * as Joi from 'joi';

export const TodoSchema = Joi.object({
  id: Joi.number().required(),
  status: Joi.string().valid('TODO', 'DOING', 'DONE').required(),
  color: Joi.string().optional(),
  backgroundColor: Joi.string().optional(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
});

export const IdSchema = Joi.object({
  id: Joi.number().required(),
});
