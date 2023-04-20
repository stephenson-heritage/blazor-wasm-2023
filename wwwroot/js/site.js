

window.consoleMessage = (message, type) => {
    console.log(message, type);
}

window.addInts = (a, b, el) => {
    r = a + b;
    console.log(el);
    el.innerHTML = (r);
    return r;
}