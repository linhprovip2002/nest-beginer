import * as Joi from 'joi';

export const UserSchema = Joi.object({
  id: Joi.number(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  googleId: Joi.string().allow(null).optional(),
  facebookId: Joi.string().allow(null).optional(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  deleteAt: Joi.date(),
  isActive: Joi.boolean(),
  role: Joi.object({
    // Assuming Role has an 'id' property
    id: Joi.number(),
    // Add other properties of Role if necessary
  }),
});
