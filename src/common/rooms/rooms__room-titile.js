let roomsRoomTitle = document.getElementsByClassName('rooms__room-title');
roomsRoomTitle = Array.from(roomsRoomTitle);

function toFixRoomsRoomTitle(indent) {
    roomsRoomTitle.forEach(function (item) {
        item.style.left = indent + 'px';
        indent ?
            item.classList.add('rooms__room-title_scrolling')
            :
            item.classList.remove('rooms__room-title_scrolling');
    })
}

export {toFixRoomsRoomTitle};