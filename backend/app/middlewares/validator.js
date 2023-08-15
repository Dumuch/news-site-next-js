const { validationResult } = require('express-validator');

class Validator {
    setValidationRules(rules) {
        return rules;
    }

    validate(req, res, next) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // cant use next() here, next(res.status....) result in JSON loopback
            // next(createError) wont give user much description, cos we can't send back errors.array()
            return res.status(400).json({ errors: errors.array() });
        } else {
            next();
        }
    }
}

module.exports = { Validator };
