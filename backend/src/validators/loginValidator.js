const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    get: celebrate({
        [Segments.BODY]: Joi.object().keys({
            page: Joi.number(),
        }),
    }),
};
