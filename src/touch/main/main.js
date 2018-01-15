import {deviceCheck} from "../../common/device-check/device-check";
import {toFixRoomsFloorText} from "../../common/rooms/rooms__floor-text";
import {toFixRoomsRoomTitle} from "../../common/rooms/rooms__room-titile";
import {widthRooms} from "../../common/rooms/rooms";

if (deviceCheck() === 'touch') {
    let main = document.getElementsByClassName('main')[0];

    main.addEventListener('scroll', function () {
        if (this.scrollLeft > widthRooms) {
            toFixRoomsFloorText(this.scrollLeft);
            toFixRoomsRoomTitle(this.scrollLeft);
        } else {
            toFixRoomsFloorText(0);
            toFixRoomsRoomTitle(0);
        }
    })
}