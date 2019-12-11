import { Injectable } from '@angular/core';

@Injectable()
export class DateService {
    public strToObjDDMMYYYY(dateString) {
      if(dateString.indexOf('0001-01-01') >= 0) {
        return null;
      }
      var dateobj = new Date(dateString);
      return { date: { year: dateobj.getFullYear(), month: dateobj.getMonth() + 1, day: dateobj.getDate() } };
    }

    public dateTo1200(datecurrent) {
      var dateobj = new Date(datecurrent);
      return  new Date((dateobj.getMonth() + 1 ) +  '/' +  dateobj.getDate() + '/' + dateobj.getFullYear() + ' 12:00:00');
    }
}