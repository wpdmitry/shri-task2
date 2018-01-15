import {Calendar} from "../calendar/calendar";
import {currentDay} from "../main/main";
import {inputDropCalendar} from "./input__drop-calendar";

let inputCalendar = document.getElementsByClassName('input__calendar')[0];
let inputWrapper = inputCalendar.parentElement;
let calendar = new Calendar(currentDay, 1).create();

inputDropCalendar.style.width = inputWrapper.offsetWidth + 'px';
inputDropCalendar.style.height = inputWrapper.offsetWidth + 'px';

inputDropCalendar.appendChild(calendar);
inputWrapper.appendChild(inputDropCalendar);

inputCalendar.addEventListener('click', function () {
    console.log('click');

    if (inputCalendar.classList.contains('input__calendar_openly')) {
        inputDropCalendar.classList.remove('input__drop-calendar_active');
        inputCalendar.classList.remove('input__calendar_openly');
    } else {
        inputDropCalendar.classList.add('input__drop-calendar_active');
        inputCalendar.classList.add('input__calendar_openly');
    }

});