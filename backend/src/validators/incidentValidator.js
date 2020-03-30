const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    get: celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
        }),
    }),
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required().max(255),
            description: Joi.string().required().max(255),
            value: Joi.number().positive().precision(2),
        }),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required(),
        }),
    }),
};
