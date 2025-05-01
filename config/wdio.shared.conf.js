const { join } = require('path');

exports.config = {
    specs: [
        '../test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 1,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://telnyx.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    capabilities: [],
    services: [[
        ['selenium-standalone', {
          // you can tell it to install only Chrome
          installArgs: { drivers: { chrome: { version: 'latest' } } },
          args:        { drivers: { chrome: { version: 'latest' } } }
        }]
    ]],
    framework: 'mocha',
    automationProtocol: 'webdriver',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 100000
    },
    before: function () {
        require('@babel/register');
    }
}