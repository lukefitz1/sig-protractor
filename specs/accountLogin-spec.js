browser.waitForAngularEnabled(false);
account = require('../pages/myAccountPageObj');

describe('Account login page', function() {
  it('should login with valid creds', function() {
    
    if (env == 'prod') {
    	console.log("Production");
    } else {
    	console.log("Staging");
    }

    browser.get(baseUrl + '/customer/account/login');

    account.login('luke.fitzgerald@blueacorn.com', 'pass4luke');
  });
});