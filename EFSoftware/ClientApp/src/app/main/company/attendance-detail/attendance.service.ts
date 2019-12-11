import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../libs/request';
import { constant } from '../../../../constant/constant';

@Injectable()
export class AttendanceService {

  constructor(private _Request: CustomRequest) {

  }
  getCount(companyid, filterByName) {
    return this._Request.Request('api/TMSAttendance/GetAllWithCompany?companyid=' + companyid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getAttendanceList(page, size, companyid, filterByName) {
    return this._Request.Request('api/TMSAttendance/GetAllPagingWithCompany?page=' + page + '&pageSize=' + size
      + '&companyid=' + companyid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getAttendaceGlobal() {
    return this._Request.Request(constant.API_GET_GLOBAL_ATTENDANCE_ALL_ACTIVE, RequestMethod.Get);
  }

  getAttendanceById(id) {
    return this._Request.Request('api/TMSAttendance/GetById/' + id, RequestMethod.Get);
  }
  createAttendance(attendance) {
    return this._Request.Request('api/TMSAttendance/AddFromGlobal', RequestMethod.Post, attendance);
  }

  updateAttendance(attendance) {
    return this._Request.Request('api/TMSAttendance/Update', RequestMethod.Put, attendance);
  }
  deleteAttendance(id) {
    return this._Request.Request('api/TMSAttendance/Delete/?id=' + id, RequestMethod.Delete);
  }
}
