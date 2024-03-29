Date.prototype.getNormDay = function () {
    return this.getDay() === 0 ? 7: this.getDay();
};

String.prototype.toFirstUpperCase = function () {
    return this.charAt(0).toUpperCase() + this.substr(1);
};

export class Calendar {
    constructor(currentDay, numberOfMonths, nextPack = 0) {
        this.currentDay = currentDay;
        this.numberOfMonths = numberOfMonths;
        this.nextPack = nextPack;
    }

    create() {
        let startDay = new Date(this.currentDay.getFullYear(),
            this.currentDay.getMonth() + this.nextPack * this.numberOfMonths,
            1, 23, 59, 59);
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
            tableCaption.innerHTML = startDay.toLocaleString('ru', {month: 'long', year: 'numeric'}).toFirstUpperCase();
            table.appendChild(tableCaption);

            let tableHead = document.createElement('thead');
            tableHead.classList.add('calendar__table-head');
            for (let dw of Calendar.getDayOfWeek().values()) {
                let td = document.createElement('td');
                dw === 'ВС' ?
                    td.classList.add('calendar__table-data', 'calendar__table-data_free')
                    :
                    td.classList.add('calendar__table-data');
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
        const mapDays = new Map([
            [1, 'ПН'], [2, 'ВТ'], [3, 'СР'],
            [4, 'ЧТ'], [5, 'ПТ'], [6, 'СБ'], [7, 'ВС']
        ]);
        if (n < 0) {
            return mapDays;
        }
        return mapDays.get(n);
    }

    static sameDays(date1, date2) {
        return (date1 - date2) > 0 && (date1 - date2) < 86400000;
    };
}
