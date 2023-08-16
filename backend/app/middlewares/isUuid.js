const { validate: uuidValidate } = require('uuid');

module.exports =
    (uuidQuery = 'id', message = 'Invalid uuid') =>
    (req, res, next) => {
        // if (!uuidValidate(req.params[uuidQuery])) {
        //     throw new Error(message);
        // } else {
            return next();
        // }
    };
