import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../../libs/request';
import { constant } from '../../../../../constant/constant';

@Injectable()
export class EmployeesService {

  constructor(private _Request: CustomRequest) {

  }

  getCount(companyid, departmentid, siteid, jobsitedid,filterByName) {
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
      constant.API_GET_LIST_SITE_FOR_COMPANY + '?departmentid=' + departmentId + '&companyid=' + companyid, RequestMethod.Get);
  }

  getListJobsite(companyid, departmentid, siteid) {
    return this._Request.Request(
      'api/TMSJobSite/GetAllWithSite?companyid=' + companyid + '&departmentid=' + departmentid + '&siteid' + siteid, RequestMethod.Get);
  }

  getEmployeesList(page, size, companyid, departmentid, siteid, jobsiteid, filterByName) {
    return this._Request.Request('api/TMSEmployee/GetAllPagingWithJobSite?page=' + page + '&pageSize=' + size +
      '&companyid=' + companyid + '&departmentid=' + departmentid + '&siteid=' + siteid + '&jobsiteid=' + jobsiteid
      + '&filterByName=' + filterByName, RequestMethod.Get);
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

  getWorkingHours() {
    return this._Request.Request('api/TMSShiftJobSite/GetListWorkingHours', RequestMethod.Get);
  }


  // API_EVENT_PROMOTION

  updateEventPromotion(promotion) {
    return this._Request.Request(constant.API_UPDATE_EVENT_PROMOTION, RequestMethod.Put, promotion);
  }

  getEventPromotionByEmployeeId(employeeId) {
    return this._Request.Request(constant.API_GET_ID_EVENT_PROMOTION + employeeId, RequestMethod.Get);
  }

  // API_EVENT_TERMINATION_RESIGN

  updateEventTR(tr) {
    return this._Request.Request(constant.API_UPDATE_EVENT_TERMINATION_RESIGN, RequestMethod.Put, tr);
  }

  getEventTRByEmployeeId(employeeId) {
    return this._Request.Request(constant.API_GET_ID_EVENT_TERMINATION_RESIGN + employeeId, RequestMethod.Get);
  }

  // API_EVENT_CONTRACT

  updateEventContract(contract) {
    return this._Request.Request(constant.API_UPDATE_EVENT_CONTRACT, RequestMethod.Put, contract);
  }

  getEventContractByEmployeeId(employeeId) {
    return this._Request.Request(constant.API_GET_ID_EVENT_CONTRACT + employeeId, RequestMethod.Get);
  }

  // API_EVENT_TRANSFER

  updateEventTransfer(transfer) {
    return this._Request.Request(constant.API_UPDATE_EVENT_TRASNFER, RequestMethod.Put, transfer);
  }

  getEventTransferByEmployeeId(employeeId) {
    return this._Request.Request(constant.API_GET_ID_EVENT_TRANSFER + employeeId, RequestMethod.Get);
  }

  // API_EVENT_REJOIN

  updateEventEmployee(eventRejoin) {
    return this._Request.Request(constant.API_UPDATE_EVENT_REJOIN, RequestMethod.Put, eventRejoin);
  }

  getEventRejoinDetail(employeeId) {
    return this._Request.Request(constant.API_GET_ID_EVENT_REJOIN + employeeId, RequestMethod.Get);
  }

}
