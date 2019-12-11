import { Injectable } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../../libs/request';
import { constant } from '../../../../../constant/constant';

@Injectable()
export class AllowanceJobsiteService {

  constructor(private _Request: CustomRequest) { }

  getCount(companyid, jobsiteid, filterByName) {
    return this._Request.Request(constant.API_GET_ALL_ALLOWANCE_JOBSITE_WITH_JOBSITE + '?companyid=' + companyid
      + '&jobsiteid=' + jobsiteid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getAllowanceJobsiteList(page, size, companyid, jobsiteid, filterByName) {
    return this._Request.Request(constant.API_GET_ALL_PAGING_ALLOWANCE_JOBSITE_WITH_JOBSITE + '?page=' + page + '&pageSize=' + size
      + '&companyid=' + companyid + '&jobsiteid=' + jobsiteid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getAllowanceCompany(companyid) {
    return this._Request.Request(constant.API_GET_LIST_ALLOWANCE_WITH_COMPANY + '?companyid=' + companyid, RequestMethod.Get);
  }

  getAllowanceJobsiteById(id) {
    return this._Request.Request(constant.API_GET_ALLOWANCE_JOBSITE_BY_ID + id, RequestMethod.Get);
  }

  // createAllowanceJobsite(allowancejobsite) {
  //   return this._Request.Request(constant.API_ADD_ALLOWANCE_JOBSITE, RequestMethod.Post, allowancejobsite);
  // }

  addAllowanceJobsite(allowancejobsite) {
    return this._Request.Request(constant.API_ADD_FROM_COMPANY_ALLOWANCE_JOBSITE, RequestMethod.Post, allowancejobsite);
  }

  updateAllowanceJobsite(allowancejobsite) {
    return this._Request.Request(constant.API_UPDATE_ALLOWANCE_JOBSITE, RequestMethod.Put, allowancejobsite);
  }

  deleteAllowacneJobsite(id) {
    return this._Request.Request(constant.API_DELETE_ALLOWANCE_JOBSITE + '/?id=' + id, RequestMethod.Delete);
  }
}
