import Joi from 'joi';


export const entrySchema = Joi.object({
    title: Joi.string().trim().required(),
    type: Joi.string().valid('Movie', 'TV Show').required(),
    director: Joi.string().trim().required(),
    budget: Joi.number().required(),
    location: Joi.string().trim().required(),
    duration: Joi.string().trim().required(),
    year: Joi.number().integer().min(1880).max(2100).required(),
});