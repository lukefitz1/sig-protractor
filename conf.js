if (process.env.SERVER === "prod") {
    env = 'prod';
    baseUrl = "http://www.signaturehardware.com";
} else {
    env = 'stage';
    baseUrl = "http://staging.signaturehardware.com";
}

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/accountCreate-spec.js'],
  capabilities: {
  	browserName: 'chrome'
  },
  getPageTimeout: 10000,

  // run tests in mutlitple browsers at the same time
  /*multiCapabilities: [{
  	browserName: 'firefox'
  }, {
  	browserName: 'chrome'
  }]*/

  /*suites: {

  }*/
};