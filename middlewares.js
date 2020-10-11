const jwt = require('jsonwebtoken');
const constants = require('./constants');

const middlewares = {
    authorization: async (req, res, next) => {
        if (req.headers.authorization) {
            try {
                const isValid = await jwt.verify(req.headers.authorization, constants.Secret);
                if (isValid) {
                    next();
                } else {
                    res.status(401);
                    res.send({error: 'unauthorized', errorDescription: 'Token expired'});
                }
            } catch (error) {
                res.status(401);
                res.send({error: 'unauthorized', errorDescription: 'Invalid token'});
            }
        } else {
            const allowedRoutes = ['/v1/users/register', '/v1/users/login'];
            if (allowedRoutes.includes(req.url)) {
                next();
            } else {
                res.status(401);
                res.send({error: 'unauthorized', errorDescription: 'Authorization token is mandatory'});
            }
        }
    }
}

module.exports = middlewares;