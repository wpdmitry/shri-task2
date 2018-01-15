// import {deviceCheck} from "../../common/device-check/device-check";
// import {Calendar} from "../../common/calendar/calendar";
// import {currentDay} from "../../common/main/main";
//
// if (deviceCheck() === 'desktop') {
//     let inputCalendar = document.getElementsByClassName('input__calendar')[0];
//     let inputWrapper = inputCalendar.parentElement;
//     const calendar = new Calendar(currentDay, 1).create();
//
//     let div = document.createElement('div');
//     div.style.width = inputWrapper.offsetWidth + 'px';
//     div.style.height = inputWrapper.offsetWidth + 'px';
//     div.style.position = 'absolute';
//     div.style.top = 'calc(100% + 1px)';
//     div.style.left = '0';
//     div.style.backgroundColor = '#fff';
//     div.style.boxShadow = '0 2px 8px 0 rgba(0,44,92,0.28)';
//     div.style.display = 'none';
//     div.style.zIndex = '2';
//     div.appendChild(calendar);
//     inputWrapper.appendChild(div);
//
//     inputCalendar.addEventListener('click', function () {
//         if (inputCalendar.classList.contains('input__calendar_openly')) {
//             div.style.display = 'none';
//             inputCalendar.classList.remove('input__calendar_openly');
//         } else {
//             div.style.display = 'block';
//             inputCalendar.classList.add('input__calendar_openly');
//         }
//
//     })
// }



