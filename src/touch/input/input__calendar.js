// import {deviceCheck} from "../../common/device-check/device-check";
// import {currentDay} from "../../common/main/main";
// import {Calendar} from "../../common/calendar/calendar";
// import {inputDropCalendar} from "../../common/input/input__drop-calendar";
//
// if (deviceCheck() === 'touch') {
//     let inputCalendar = document.getElementsByClassName('input__calendar')[0];
//     let inputWrapper = inputCalendar.parentElement;
//     let calendar = new Calendar(currentDay, 1).create();
//    
//     inputDropCalendar.style.width = inputWrapper.offsetWidth + 'px';
//     inputDropCalendar.style.height = inputWrapper.offsetWidth + 'px';
//    
//     inputDropCalendar.appendChild(calendar);
//     inputWrapper.appendChild(inputDropCalendar);
//
//     inputCalendar.addEventListener('click', function () {
//         if (inputCalendar.classList.contains('input__calendar_openly')) {
//             inputDropCalendar.classList.remove('input__drop-calendar_active');
//             inputCalendar.classList.remove('input__calendar_openly');
//         } else {
//             inputDropCalendar.classList.add('input__drop-calendar_active');
//             inputCalendar.classList.add('input__calendar_openly');
//         }
//
//     })
// }


