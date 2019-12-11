import { Injectable } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../libs/request';
import { constant } from '../../../../constant/constant';

@Injectable()
export class AllowanceService {

  constructor(private _Request: CustomRequest) { }

  getCount(companyid, filterByName) {
    return this._Request.Request(constant.API_GET_LIST_ALLOWANCE_WITH_COMPANY + '?companyid=' + companyid
    + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getAllowanceList(page, size, companyid, filterByName) {
    return this._Request.Request(constant.API_GET_ALLOWANCE_PAGING_WITH_COMPANY + '?page=' + page + '&pageSize=' + size
      + '&companyid=' + companyid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  createAllowance(allowance) {
    return this._Request.Request(constant.API_ADD_ALLOWANCE, RequestMethod.Post, allowance);
  }

  getAllowanceById(id) {
    return this._Request.Request(constant.API_GET_ALLOWANCE_BY_ID + id, RequestMethod.Get);
  }

  updateAllowance(allowance) {
    return this._Request.Request(constant.API_UPDATE_ALLOWANCE, RequestMethod.Put, allowance);
  }

  deleteAllowance(id) {
    return this._Request.Request(constant.API_DELETE_ALLOWANCE + '?id=' + id, RequestMethod.Delete);
  }
}
