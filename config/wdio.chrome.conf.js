const { config } = require('./wdio.shared.conf');
config.services = ['chromedriver'];
config.capabilities = [{
    maxInstances: 6,
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: [
            '--headless',
            '--window-size=1280,800',
        ],
    },
}];

exports.config = config;