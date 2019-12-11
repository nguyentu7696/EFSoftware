import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../libs/request';
import { constant } from '../../../../constant/constant';

@Injectable()
export class JobSiteService {

  constructor(private _Request: CustomRequest) {

  }

  getCount(companyid, departmentid, siteid, filterByName) {
    return this._Request.Request('api/TMSJobSite/GetAllWithSite?companyid=' + companyid +
      '&departmentid=' + departmentid + '&siteid=' + siteid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getListCompany() {
    return this._Request.Request(constant.API_GET_LIST_COMPANY, RequestMethod.Get);
  }

  getListDepartment(companyid) {
    return this._Request.Request(constant.API_GET_LIST_DEPARTMENT_WITH_COMPANY + '?companyid=' + companyid, RequestMethod.Get);
  }

  getListSite(companyid, departmentId) {
    return this._Request.Request(
      'api/TMSsite/GetAllForCompany?departmentid=' + departmentId + '&companyid=' + companyid, RequestMethod.Get);
  }

  getJobSiteList(page, size, companyid, departmentid, siteid, filterByName) {
    return this._Request.Request('api/TMSJobSite/GetAllPagingWithSite?page=' + page + '&pageSize=' + size
      + '&companyid=' + companyid + '&departmentid=' + departmentid + '&siteid=' + siteid
      + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getJobSiteById(id) {
    return this._Request.Request('api/TMSJobSite/GetById/' + id, RequestMethod.Get);
  }

  createJobSite(jobSite) {
    return this._Request.Request('api/TMSJobSite/Add', RequestMethod.Post, jobSite);
  }

  updateJobSite(jobSite) {
    return this._Request.Request('api/TMSJobSite/Update', RequestMethod.Put, jobSite);
  }

  deleteJobSite(id) {
    return this._Request.Request('api/TMSJobSite/Delete/?id=' + id, RequestMethod.Delete);
  }


}
