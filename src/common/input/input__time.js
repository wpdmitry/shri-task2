let inputTime = document.getElementsByClassName('input__time');
inputTime = Array.from(inputTime);

inputTime.forEach(function (item) {
    item.addEventListener('keypress', setTime);
});


function setTime(event) {
    let char = +getChar(event);

    if (Number.isInteger(char)) {
        if (event.target.value.length === 2) {
            event.target.value += ':';
        }
    } else {
        event.preventDefault();
    }
}

function getChar(event) {
    if (event.which === null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode)
    }

    if (event.which !== 0 && event.charCode !== 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which);
    }

    return null;
}