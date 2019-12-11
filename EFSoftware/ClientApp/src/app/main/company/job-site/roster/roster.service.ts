import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../../libs/request';
import { constant } from '../../../../../constant/constant';
@Injectable()
export class RosterService {
  constructor(private _Request: CustomRequest) {

  }

  // List

  getListShiftCode(jobsiteId) {
    return this._Request.Request(constant.API_GET_ALL_SHIFT_WITH_JOB_SITE_Roster + '?jobsiteid=' + jobsiteId, RequestMethod.Get);
  }

  getListAttendenceCode(companyid) {
    return this._Request.Request('api/TMSAttendance/GetAllWithCompany?companyid=' + companyid, RequestMethod.Get);
  }

  getListOTSettingCode(companyid, jobsiteid) {
    return this._Request.Request('api/TMSOtSetting/GetAllWithJobSite?companyid=' + companyid
    + '&jobsiteid=' + jobsiteid, RequestMethod.Get);
  }

  GetAllWithJobSiteByRemark(companyid, jobsiteid, remark) {
    return this._Request.Request('api/TMSOtSetting/GetAllWithJobSiteByRemark?companyid=' + companyid
    + '&jobsiteid=' + jobsiteid + '&remark=' + remark, RequestMethod.Get);
  }

  getRosterByForMonth(startDate, endDate, employeeId, companyId, jobsiteId) {
    return this._Request.Request(constant.API_GET_ROSTER_BY_MONTH + '?startDate=' + startDate + '&endDate=' + endDate
    + '&employeeId=' + employeeId + '&companyId=' + companyId + '&jobsiteId=' + jobsiteId, RequestMethod.Get);
  }

  GetDetailRoster(employeeId, date) {
    return this._Request.Request(constant.API_GET_ROSTER_DETAIL + '?employeeId=' + employeeId + '&date=' + date, RequestMethod.Get);
  }

  updateRoster(roster) {
    return this._Request.Request(constant.API_UPDATE_ROSTER, RequestMethod.Put, roster);
  }

  SaveRoster(lstRoster) {
    return this._Request.Request(constant.API_SAVE_ROSTER_FOR_MONTH, RequestMethod.Put, lstRoster);
  }

  DuplicateRoster(duplicateModel) {
    return this._Request.Request(constant.API_SAVE_DUPLICATE_ROSTER, RequestMethod.Put, duplicateModel);
  }

  // Button Update
  getEmployeeById(employeeId) {
    return this._Request.Request('api/TMSEmployee/GetById/' + employeeId, RequestMethod.Get);
  }
}