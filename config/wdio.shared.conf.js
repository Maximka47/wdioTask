const { join } = require('path');

exports.config = {
    specs: [
        '../test/specs/**/*.js'
    ],
    exclude: [],
    maxInstances: 6,
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://telnyx.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    capabilities: [],
    services: [],
    framework: 'mocha',
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
        timeout: 60000
    },
    before: function () {
        require('@babel/register');
    }
}