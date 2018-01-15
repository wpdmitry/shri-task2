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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceCheck", function() { return deviceCheck; });
const desktop = 1280,
      touch = 1279;

function deviceCheck() {
    return document.documentElement.offsetWidth > desktop ? 'desktop' : 'touch';
}



/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentDay", function() { return currentDay; });
let currentDay = new Date(2017, 11, 14);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "widthRooms", function() { return widthRooms; });
let rooms = document.getElementsByClassName('rooms')[0];
let widthRooms = rooms.offsetWidth;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFixRoomsFloorText", function() { return toFixRoomsFloorText; });
let roomsFloorText = document.getElementsByClassName('rooms__floor-text');
roomsFloorText = Array.from(roomsFloorText);

function toFixRoomsFloorText(indent) {
    roomsFloorText.forEach(function (item) {
        item.style.left = indent + 'px';
    });
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFixRoomsRoomTitle", function() { return toFixRoomsRoomTitle; });
let roomsRoomTitle = document.getElementsByClassName('rooms__room-title');
roomsRoomTitle = Array.from(roomsRoomTitle);

function toFixRoomsRoomTitle(indent) {
    roomsRoomTitle.forEach(function (item) {
        item.style.left = indent + 'px';
        indent ? item.classList.add('rooms__room-title_scrolling') : item.classList.remove('rooms__room-title_scrolling');
    });
}



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(0);
__webpack_require__(2);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(10);
module.exports = __webpack_require__(11);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_calendar_calendar__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__(2);



let dateCalendar = document.getElementsByClassName('date__calendar')[0];
const calendar = new __WEBPACK_IMPORTED_MODULE_0__common_calendar_calendar__["Calendar"](__WEBPACK_IMPORTED_MODULE_1__main__["currentDay"], 3).create();
dateCalendar.appendChild(calendar);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// let personFloor = document.getElementsByClassName('person__floor');
// personFloor = Array.from(personFloor);
// export {personFloor};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// let personName = document.getElementsByClassName('person__name');
// personName = Array.from(personName);
// export {personName};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_device_check_device_check__ = __webpack_require__(0);


if (Object(__WEBPACK_IMPORTED_MODULE_0__common_device_check_device_check__["deviceCheck"])() === 'touch') {
    let diagramLabel = document.getElementsByClassName('diagram__label');
    diagramLabel = Array.from(diagramLabel);

    diagramLabel.forEach(function (item) {
        item.addEventListener('change', function () {
            let childs = this.children;
            for (let i = 0, l = childs.length; i < l; i++) {
                const client = this.getBoundingClientRect();

                if (childs[i].classList.contains('diagram__popup')) {
                    childs[i].style.left = `${-client.left}px`;
                }

                if (childs[i].classList.contains('diagram__triangle')) {
                    if (client.left < 0 && Math.abs(client.left) > 0.5 * this.offsetWidth) {
                        childs[i].style.left = '100%';
                        childs[i].style.transform = 'translateX(-200%)';
                    } else if (client.right < 0 && Math.abs(client.right) > 0.5 * this.offsetWidth) {
                        childs[i].style.left = '0';
                        childs[i].style.transform = 'translateX(200%)';
                    } else {
                        childs[i].style.left = '50%';
                        childs[i].style.transform = 'translateX(-50%)';
                    }
                }
            }
        });
    });
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_device_check_device_check__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_rooms_rooms_floor_text__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_rooms_rooms_room_titile__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_rooms_rooms__ = __webpack_require__(3);





if (Object(__WEBPACK_IMPORTED_MODULE_0__common_device_check_device_check__["deviceCheck"])() === 'touch') {
    let main = document.getElementsByClassName('main')[0];

    main.addEventListener('scroll', function () {
        if (this.scrollLeft > __WEBPACK_IMPORTED_MODULE_3__common_rooms_rooms__["widthRooms"]) {
            Object(__WEBPACK_IMPORTED_MODULE_1__common_rooms_rooms_floor_text__["toFixRoomsFloorText"])(this.scrollLeft);
            Object(__WEBPACK_IMPORTED_MODULE_2__common_rooms_rooms_room_titile__["toFixRoomsRoomTitle"])(this.scrollLeft);
        } else {
            Object(__WEBPACK_IMPORTED_MODULE_1__common_rooms_rooms_floor_text__["toFixRoomsFloorText"])(0);
            Object(__WEBPACK_IMPORTED_MODULE_2__common_rooms_rooms_room_titile__["toFixRoomsRoomTitle"])(0);
        }
    });
}

/***/ })
/******/ ]);