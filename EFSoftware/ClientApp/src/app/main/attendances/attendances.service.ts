import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../libs/request';
import { constant } from '../../../constant/constant';
@Injectable()
export class AttendancesService {

  constructor(private _Request: CustomRequest) {

  }

  getListCompnay() {
    return this._Request.Request(constant.API_GET_LIST_COMPANY, RequestMethod.Get);
  }

  getCount(filterByName) {
    return this._Request.Request('api/Attendance/GetAll?filterByName=' + filterByName, RequestMethod.Get)
  }

  getAttendanceList(page, size, filterByName,  orderByName,  orderByCode, orderByValue ) {
    return this._Request.Request('api/Attendance/GetAllPaging?page=' + page + '&pageSize=' + size + "&filterByName=" + filterByName + "&orderByName=" + 
    orderByName + "&orderByCode=" +  orderByCode + "&orderByValue=" + orderByValue, RequestMethod.Get)
  }

  getDepartmentList() {
    return this._Request.Request('api/Department/GetAll', RequestMethod.Get)
  }

  createAttendance(attendance) {
    return this._Request.Request('api/Attendance/Add', RequestMethod.Post, attendance)
  }

  getAttendanceById(id) {
    return this._Request.Request('api/Attendance/GetById/' + id, RequestMethod.Get);
  }

  updateAttendance(attendance) {
    return this._Request.Request('api/Attendance/Update', RequestMethod.Put, attendance)
  }

  deleteAttendance(id) {
    return this._Request.Request('api/Attendance/Delete/?id=' + id, RequestMethod.Delete);
  }


}
