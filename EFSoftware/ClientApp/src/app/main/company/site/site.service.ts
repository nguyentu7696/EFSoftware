import { Injectable } from '@angular/core';
import { CustomRequest } from '../../../libs/request';
import { RequestMethod } from '@angular/http';
import { constant } from '../../../../constant/constant';

@Injectable()
export class SiteService {

  constructor(private _Request: CustomRequest) { }

  getCount(companyid, departmentid, filterByName) {
    return this._Request.Request(constant.API_GET_LIST_SITE_FOR_COMPANY + '?departmentid=' + departmentid
     + '&companyid=' + companyid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getListSiteWithCompany(page, size, companyid, departmentid, filterByName) {
    return this._Request.Request(constant.API_GET_SITE_PAGING_FOR_COMPANY + '?page=' + page + '&pageSize=' + size
      + '&departmentid=' + departmentid + '&companyid=' + companyid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getListSite(page, size) {
    return this._Request.Request(constant.API_GET_SITE_PAGING_FOR_DEPARTMENT + '?page=' + page + '&pageSize=' + size, RequestMethod.Get);
  }

  createSite(site) {
    return this._Request.Request(constant.API_ADD_SITE, RequestMethod.Post, site);
  }

  getListCompany() {
    return this._Request.Request(constant.API_GET_LIST_COMPANY, RequestMethod.Get);
  }

  getAllDepartment() {
    return this._Request.Request(constant.API_GET_LIST_DEPARTMENT, RequestMethod.Get);
  }

  getListDepartment(companyId) {
    return this._Request.Request(constant.API_GET_LIST_DEPARTMENT_WITH_COMPANY + "?companyid=" + companyId, RequestMethod.Get);
  }

  updateSite(site) {
    return this._Request.Request(constant.API_UPDATE_SITE, RequestMethod.Put, site);
  }

  deleteSite(id) {
    return this._Request.Request(constant.API_DELETE_SITE + '?id=' + id, RequestMethod.Delete);
  }

  getSiteById(id) {
    return this._Request.Request(constant.API_GET_SITE_DETAIL + id, RequestMethod.Get);
  }

}
