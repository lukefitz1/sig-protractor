//random string generator
randomstring = require("randomstring");

class Base {
	generateRandomString() {
		return randomstring.generate({
            length: 5,
            charset: 'alphanumeric'
        });
	}
}

module.exports = new Base();