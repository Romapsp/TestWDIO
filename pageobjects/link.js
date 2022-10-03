module.exports = class Link {

    open (path) {
        return browser.url(`https://${path}.onliner.by/`)
    }

}
