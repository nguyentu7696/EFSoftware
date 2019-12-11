import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../libs/request';
import { constant } from '../../../constant/constant';

@Injectable()
export class UserService {

  constructor(private _Request: CustomRequest) {

  }

  getCount(companyid, departmentid, siteid, jobsitedid, filterByName) {
    return this._Request.Request('api/TMSEmployee/GetAllWithJobSite?companyid=' + companyid +
      '&departmentid=' + departmentid + '&siteid=' + siteid + '&jobsiteid=' + jobsitedid
      + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getListCompany() {
    return this._Request.Request(constant.API_GET_LIST_COMPANY, RequestMethod.Get);
  }

  getListDepartment(companyid) {
    return this._Request.Request(constant.API_GET_LIST_DEPARTMENT_WITH_COMPANY + '?companyid=' + companyid, RequestMethod.Get);
  }

  getListSite(companyid, departmentId) {
    return this._Request.Request(
      constant.API_GET_LIST_SITE_FOR_COMPANY + '?departmentid=' + departmentId + '&companyid=' + companyid
      , RequestMethod.Get);
  }

  getListJobsite(companyid, departmentid, siteid) {
    return this._Request.Request(
      'api/TMSJobSite/GetAllWithSite?companyid=' + companyid + '&departmentid=' + departmentid + '&siteid' + siteid, RequestMethod.Get);
  }

  getEmployeesList(page, size, companyid, departmentid, siteid, jobsiteid, filterByName) {
    return this._Request.Request('api/TMSEmployee/GetAllPagingWithJobSite?page=' + page + '&pageSize=' + size
      + '&companyid=' + companyid + '&departmentid=' + departmentid + '&siteid=' + siteid
      + '&jobsiteid=' + jobsiteid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getEmployeesById(id) {
    return this._Request.Request('api/TMSEmployee/GetById/' + id, RequestMethod.Get);
  }

  createEmployees(employees) {
    return this._Request.Request('api/TMSEmployee/Add', RequestMethod.Post, employees);
  }

  updateEmployees(employees) {
    return this._Request.Request('api/TMSEmployee/Update', RequestMethod.Put, employees);
  }

  deleteEmployees(id) {
    return this._Request.Request('api/TMSEmployee/Delete/?id=' + id, RequestMethod.Delete);
  }


}