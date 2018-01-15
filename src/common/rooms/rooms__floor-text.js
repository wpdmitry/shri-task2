let roomsFloorText = document.getElementsByClassName('rooms__floor-text');
roomsFloorText = Array.from(roomsFloorText);

function toFixRoomsFloorText(indent) {
    roomsFloorText.forEach(function (item) {
        item.style.left = indent + 'px';
    })
}

export {toFixRoomsFloorText};