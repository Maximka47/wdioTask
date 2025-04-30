const { browser } = require('@wdio/globals')

export default class Page {

    async open(path) {
        await browser.url(`baseUrl/${path}`)

    }

}