import {Calendar} from "../../common/calendar/calendar";
import {currentDay} from "./main";

let dateCalendar = document.getElementsByClassName('date__calendar')[0];
const calendar = new Calendar(currentDay, 3).create();
dateCalendar.appendChild(calendar);
