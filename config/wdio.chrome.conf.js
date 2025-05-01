const { config } = require('./wdio.shared.conf');

config.services = [
    // ['chromedriver', {
    //   port: 9515,
    //   chromedriverArgs: ['--url-base=/']
    // }]
];
config.capabilities = [{
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
        args: [
            '--headless',
            '--no-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--window-size=1280,800',
            `--user-data-dir=/tmp/chrome-${process.env.WDIO_WORKER_ID || '0'}`
        ],
    },
}];

exports.config = config;