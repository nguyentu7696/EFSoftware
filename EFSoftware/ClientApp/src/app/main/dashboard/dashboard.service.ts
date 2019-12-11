import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../libs/request';
import { constant } from '../../../constant/constant';

@Injectable()
export class DashboardService {

  constructor(private _Request: CustomRequest) {

  }

  getListCompany() {
    return this._Request.Request(constant.API_GET_LIST_COMPANY, RequestMethod.Get);
  }

  getListDepartment(companyid) {
    return this._Request.Request(constant.API_GET_LIST_DEPARTMENT_WITH_COMPANY + '?companyid=' + companyid, RequestMethod.Get);
  }

  getListSite(companyid, departmentId) {
    return this._Request.Request(
      constant.API_GET_LIST_SITE_FOR_COMPANY + '?departmentid=' + departmentId + '&companyid=' + companyid, RequestMethod.Get);
  }

  getListJobsite(companyid, departmentid, siteid) {
    return this._Request.Request(
      'api/TMSJobSite/GetAllWithSite?companyid=' + companyid + '&departmentid=' + departmentid + '&siteid=' + siteid, RequestMethod.Get);
  }

  getCount(dateLogTime, companyid, departmentid, siteid, jobsiteid, isPresent, filterByName) {
    if (isPresent) {
      return this._Request.Request(
        'api/TMSEmployeeLogTime/GetAllEmployeeLogTime?dateLogTime=' + dateLogTime + '&companyid=' + companyid
         + '&departmentid=' + departmentid + '&siteid=' + siteid + '&jobsiteid=' + jobsiteid
         + '&filterByName=' + filterByName, RequestMethod.Get);
    }

    return this._Request.Request(
      'api/TMSEmployeeLogTime/GetAllEmployeeAbsent?dateLogTime=' + dateLogTime + '&companyid=' + companyid
       + '&departmentid=' + departmentid + '&siteid=' + siteid + '&jobsiteid=' + jobsiteid
       + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getListPresent(dateLogTime, companyid, departmentid, siteid, jobsiteid) {
    return this._Request.Request(
      'api/TMSEmployeeLogTime/GetAllEmployeeWithMonth?dateLogTime=' + dateLogTime + '&companyid=' + companyid
       + '&departmentid=' + departmentid + '&siteid=' + siteid + '&jobsiteid=' + jobsiteid, RequestMethod.Get);
  }

  getListUser(page, pageSize, dateLogTime, companyid, departmentid, siteid, jobsiteid, isPresent, filterByName) {
    if (isPresent) {
      return this._Request.Request(
        'api/TMSEmployeeLogTime/GetAllPagingEmployeeLogTime?page=' + page + '&pageSize=' + pageSize + '&dateLogTime=' + dateLogTime
        + '&companyid=' + companyid + '&departmentid=' + departmentid + '&siteid=' + siteid + '&jobsiteid=' + jobsiteid
        + '&filterByName=' + filterByName, RequestMethod.Get);
    }
    return this._Request.Request(
      'api/TMSEmployeeLogTime/GetAllPagingEmployeeAbsent?page=' + page + '&pageSize=' + pageSize + '&dateLogTime=' + dateLogTime
      + '&companyid=' + companyid + '&departmentid=' + departmentid + '&siteid=' + siteid + '&jobsiteid=' + jobsiteid
      + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  // Modal
  getCountModal(companyid, departmentid, siteid, jobsiteid, filterByName) {
    return this._Request.Request(
      'api/TMSEmployeeLogTime/GetAllEmployeeModal?companyid=' + companyid + '&departmentid=' + departmentid
      + '&siteid=' + siteid + '&jobsiteid=' + jobsiteid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getListUserModal(page, pageSize, companyid, departmentid, siteid, jobsiteid, filterByName) {
    return this._Request.Request(
      'api/TMSEmployeeLogTime/GetAllPagingEmployeeModal?page=' + page + '&pageSize=' + pageSize + '&companyid=' + companyid
       + '&departmentid=' + departmentid + '&siteid=' + siteid + '&jobsiteid=' + jobsiteid
       + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  // get list of attendance
  getAttendanceList(employeeId, dateLogTime) {
    return this._Request.Request(
      'api/TMSEmployeeLogTime/GetWithEmpIdAndDateLog?employeeId=' + employeeId + '&dateLogTime=' + dateLogTime, RequestMethod.Get);
  }

  updateAttendances(attendances) {
    return this._Request.Request(
      'api/TMSEmployeeLogTime/UpdateAttendance', RequestMethod.Post, attendances);
  }

}
