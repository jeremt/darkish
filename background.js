/**
 * Represents all websites with custom css for dark mode.
 */
const websites = [
    {urlPattern: "https://medium.com", cssFile: "styles/medium-dark.css"},
    {urlPattern: "https://www.lemonde.fr", cssFile: "styles/lemonde-dark.css"},
    {urlPattern: /^https:\/\/[a-z]+\.wikipedia.org/, cssFile: "styles/wikipedia-dark.css"},
];

chrome.webNavigation.onCommitted.addListener(({url, tabId}) => {
    for (const {urlPattern, cssFile} of websites) {
        if (urlPattern instanceof RegExp ? urlPattern.test(url) : url.startsWith(urlPattern)) {
            chrome.scripting.insertCSS({target: {tabId}, files: ["styles/theme.css", cssFile]});
        }
    }
});
