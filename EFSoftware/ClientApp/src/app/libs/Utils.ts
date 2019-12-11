
export class Utils {
    public static convertDate(dateobj) {
      dateobj = new Date(dateobj);
      var dateconvert = new Date((dateobj.getMonth() + 1 ) +  '/' +  dateobj.getDate() + '/' + dateobj.getFullYear() + ' 12:00:00');
      return dateconvert;
    }
}