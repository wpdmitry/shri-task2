const desktop = 1280,
    touch = 1279;

function deviceCheck() {
    return document.documentElement.offsetWidth > desktop ? 'desktop': 'touch';
}

export {deviceCheck};