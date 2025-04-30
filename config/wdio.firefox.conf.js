const { config } = require('./wdio.shared.conf');

config.services = ['selenium-standalone'];
config.capabilities = [{
    maxInstances: 1,
    browserName: 'firefox',
    'moz:firefoxOptions': {
        args: ['-width=1280', '-height=800']
    },
}];

exports.config = config;