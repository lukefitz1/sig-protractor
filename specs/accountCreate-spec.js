browser.waitForAngularEnabled(false);

account = require('../pages/myAccountPageObj');
base = require('../pages/basePageObj');

describe('Account login page', function() {
  it('should login with valid creds', function() {
    rand = base.generateRandomString();

    if (env == 'prod') {
    	console.log("Production");
    } else {
    	console.log("Staging");
    }

    browser.get(baseUrl + '/customer/account/create');

    account.createAccount('Luke', 'Fitzgerald', 'luke.fitzgerald' + rand + '@blueacorn.com', 'pass4luke');
  });
});