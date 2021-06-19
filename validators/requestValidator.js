const constants = require('../constants');

class RequestValidator {
    requestValidator(req, res, next) {
        try {
            if (req.url === '/create') {
                const mandatoryParams = ['totalPrice', 'paymentId', 'products'];
                const missingParams = mandatoryParams.filter(param => !(req.body[param]));
                if (missingParams.length > 0) {
                    res.status(400);
                    res.send({error: 'bad_request', errorDescription: `Request is missing ${missingParams.join(', ')} params`});
                }
            //     } else {
            //         if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(req.body.email)) {
            //             next();
            //         } else {
            //             res.status(400);
            //             res.send({error: 'bad_request', errorDescription: `Request is having invalid email format`});
            //         }
            //     }
            // } 
            else {
                next();
            }
        }
        } catch(error) {
            console.log(error);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: error });
        }
    }    




}

module.exports = new RequestValidator();