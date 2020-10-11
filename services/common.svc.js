const randomBytes = require('randombytes');

const CommonService = {
    generateRandomString: async (length) => {
        return new Promise( (resolve, reject) => {
            randomBytes(length, (err, res) => {
                if (res) {
                    const buffer = new Buffer(res);
                    const string = buffer.toString('hex');
                    resolve(string);
                } else {
                    reject(err);
                }
            });
        });
    }
}

module.exports = CommonService