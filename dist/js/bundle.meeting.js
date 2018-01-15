/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
Date.prototype.getNormDay = function () {
    return this.getDay() === 0 ? 7 : this.getDay();
};

String.prototype.toFirstUpperCase = function () {
    return this.charAt(0).toUpperCase() + this.substr(1);
};

class Calendar {
    constructor(currentDay, numberOfMonths, nextPack = 0) {
        this.currentDay = currentDay;
        this.numberOfMonths = numberOfMonths;
        this.nextPack = nextPack;
    }

    create() {
        let startDay = new Date(this.currentDay.getFullYear(), this.currentDay.getMonth() + this.nextPack * this.numberOfMonths, 1, 23, 59, 59);
        let year = startDay.getFullYear();
        let month = startDay.getMonth();

        let calendar = document.createElement('div');
        calendar.classList.add('calendar');

        for (let n = 1; n <= this.numberOfMonths; n++) {
            let calendarItem = document.createElement('div');
            calendarItem.classList.add('calendar__item');

            let table = document.createElement('table');
            table.classList.add('calendar__table');

            let tableCaption = document.createElement('caption');
            tableCaption.classList.add('calendar__table-caption');
            tableCaption.innerHTML = startDay.toLocaleString('ru', { month: 'long', year: 'numeric' }).toFirstUpperCase();
            table.appendChild(tableCaption);

            let tableHead = document.createElement('thead');
            tableHead.classList.add('calendar__table-head');
            for (let dw of Calendar.getDayOfWeek().values()) {
                let td = document.createElement('td');
                dw === 'ВС' ? td.classList.add('calendar__table-data', 'calendar__table-data_free') : td.classList.add('calendar__table-data');
                td.innerHTML = dw.toLowerCase();
                tableHead.appendChild(td);
            }
            table.appendChild(tableHead);

            let tableBody = document.createElement('tbody');
            tableBody.classList.add('calendar__table-body');
            while (startDay.getMonth() === month) {
                let tr = document.createElement('tr');
                for (let i = 1; i <= 7; i++) {
                    let td = document.createElement('td');
                    td.classList.add('calendar__table-data');
                    if (startDay.getNormDay() === i && startDay.getMonth() === month) {
                        td.innerHTML = startDay.getDate();
                        startDay.getNormDay() === 7 ? td.classList.add('calendar__table-data_free') : null;

                        if (startDay < this.currentDay) {
                            td.classList.add('calendar__table-data_inactive');
                        } else if (Calendar.sameDays(startDay, this.currentDay)) {
                            td.classList.add('calendar__table-data_today');
                        } else {
                            td.classList.add('calendar__table-data_active');
                        }
                        startDay.setDate(startDay.getDate() + 1);
                    } else {
                        td.innerHTML = ' ';
                    }
                    tr.appendChild(td);
                }
                tableBody.appendChild(tr);
            }
            table.appendChild(tableBody);
            calendarItem.appendChild(table);
            calendar.appendChild(calendarItem);

            // currentDay.setMonth(currentDay.getMonth() + 1);
            year = startDay.getFullYear();
            month = startDay.getMonth();
        }

        return calendar;
    }

    static getDayOfWeek(n = -1) {
        const mapDays = new Map([[1, 'ПН'], [2, 'ВТ'], [3, 'СР'], [4, 'ЧТ'], [5, 'ПТ'], [6, 'СБ'], [7, 'ВС']]);
        if (n < 0) {
            return mapDays;
        }
        return mapDays.get(n);
    }

    static sameDays(date1, date2) {
        return date1 - date2 > 0 && date1 - date2 < 86400000;
    }
}
/* harmony export (immutable) */ __webpack_exports__["Calendar"] = Calendar;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputArrow", function() { return inputArrow; });
let inputArrow = document.getElementsByClassName('input__arrow')[0];


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputDropCalendar", function() { return inputDropCalendar; });
let inputDropCalendar = document.createElement('div');
inputDropCalendar.classList.add('input__drop-calendar');
console.log(inputDropCalendar);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputTextMembers", function() { return inputTextMembers; });
let inputTextMembers = document.getElementById('members');


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMembersChoose", function() { return selectMembersChoose; });
let selectMembersChoose = document.getElementsByClassName('select-members__choose')[0];


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMembersChosen", function() { return selectMembersChosen; });
let selectMembersChosen = document.getElementsByClassName('select-members__chosen')[0];


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(7);
__webpack_require__(1);
__webpack_require__(8);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(10);
__webpack_require__(11);
__webpack_require__(12);
__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(15);
__webpack_require__(16);
module.exports = __webpack_require__(17);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceCheck", function() { return deviceCheck; });
const desktop = 1280,
      touch = 1279;

function deviceCheck() {
    return document.documentElement.offsetWidth > desktop ? 'desktop' : 'touch';
}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar_calendar__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_main__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_drop_calendar__ = __webpack_require__(2);




let inputCalendar = document.getElementsByClassName('input__calendar')[0];
let inputWrapper = inputCalendar.parentElement;
let calendar = new __WEBPACK_IMPORTED_MODULE_0__calendar_calendar__["Calendar"](__WEBPACK_IMPORTED_MODULE_1__main_main__["a" /* currentDay */], 1).create();

__WEBPACK_IMPORTED_MODULE_2__input_drop_calendar__["inputDropCalendar"].style.width = inputWrapper.offsetWidth + 'px';
__WEBPACK_IMPORTED_MODULE_2__input_drop_calendar__["inputDropCalendar"].style.height = inputWrapper.offsetWidth + 'px';

__WEBPACK_IMPORTED_MODULE_2__input_drop_calendar__["inputDropCalendar"].appendChild(calendar);
inputWrapper.appendChild(__WEBPACK_IMPORTED_MODULE_2__input_drop_calendar__["inputDropCalendar"]);

inputCalendar.addEventListener('click', function () {
    console.log('click');

    if (inputCalendar.classList.contains('input__calendar_openly')) {
        __WEBPACK_IMPORTED_MODULE_2__input_drop_calendar__["inputDropCalendar"].classList.remove('input__drop-calendar_active');
        inputCalendar.classList.remove('input__calendar_openly');
    } else {
        __WEBPACK_IMPORTED_MODULE_2__input_drop_calendar__["inputDropCalendar"].classList.add('input__drop-calendar_active');
        inputCalendar.classList.add('input__calendar_openly');
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return currentDay; });
let currentDay = new Date(2017, 11, 14);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

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
        return String.fromCharCode(event.keyCode);
    }

    if (event.which !== 0 && event.charCode !== 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which);
    }

    return null;
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_input_input_text__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select_members_select_members_choose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_members_select_members_chosen__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_input_arrow__ = __webpack_require__(1);





let meetingMembers = document.getElementsByClassName('meeting__members')[0];

__WEBPACK_IMPORTED_MODULE_0__common_input_input_text__["inputTextMembers"].addEventListener('focus', function () {
    __WEBPACK_IMPORTED_MODULE_1__select_members_select_members_choose__["selectMembersChoose"].classList.add('select-members__choose_active');
    __WEBPACK_IMPORTED_MODULE_2__select_members_select_members_chosen__["selectMembersChosen"].classList.add('select-members__chosen_inactive');
    __WEBPACK_IMPORTED_MODULE_3__input_input_arrow__["inputArrow"].classList.add('input__arrow_openly');
});

document.addEventListener('click', function (e) {
    if (!meetingMembers.contains(e.target)) {
        __WEBPACK_IMPORTED_MODULE_1__select_members_select_members_choose__["selectMembersChoose"].classList.remove('select-members__choose_active');
        __WEBPACK_IMPORTED_MODULE_2__select_members_select_members_chosen__["selectMembersChosen"].classList.remove('select-members__chosen_inactive');
        __WEBPACK_IMPORTED_MODULE_3__input_input_arrow__["inputArrow"].classList.remove('input__arrow_openly');
    }

    if (e.target === __WEBPACK_IMPORTED_MODULE_3__input_input_arrow__["inputArrow"] || __WEBPACK_IMPORTED_MODULE_3__input_input_arrow__["inputArrow"].contains(e.target)) {
        __WEBPACK_IMPORTED_MODULE_1__select_members_select_members_choose__["selectMembersChoose"].classList.toggle('select-members__choose_active');
        __WEBPACK_IMPORTED_MODULE_2__select_members_select_members_chosen__["selectMembersChosen"].classList.toggle('select-members__chosen_inactive');
        __WEBPACK_IMPORTED_MODULE_3__input_input_arrow__["inputArrow"].classList.toggle('input__arrow_openly');
    }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meetingSelectMembers", function() { return meetingSelectMembers; });
let meetingSelectMembers = document.getElementsByClassName('meeting__select-members')[0];


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// let personFloor = document.getElementsByClassName('person__floor');
// personFloor = Array.from(personFloor);
// export {personFloor};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// let personName = document.getElementsByClassName('person__name');
// personName = Array.from(personName);
// export {personName};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

let selectMembersMember = document.getElementsByClassName('select-members__member');
selectMembersMember = Array.from(selectMembersMember);

selectMembersMember.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.toggle('select-members__member_chosen');
    });
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

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

/***/ }),
/* 17 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);