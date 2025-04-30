const { config } = require('./wdio.shared.conf');
config.automationProtocol = 'webdriver';
config.services = ['chromedriver'];
config.capabilities = [{
    maxInstances: 6,
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: [
            '--headless',
            '--disable-gpu',
            '--window-size=1280,800',
        ],
    },
}];

exports.config = config;