import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../libs/request';
import { constant } from '../../../../constant/constant';

@Injectable()
export class ResignService {

  constructor(private _Request: CustomRequest) {

  }

  getCount(companyid, filterByName) {
    return this._Request.Request(constant.API_GET_LIST_RESIGN_REASON_WITH_COMPANY + '?companyid=' + companyid
    + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getResignReasonList(page, size, companyid, filterByName) {
    return this._Request.Request(constant.API_GET_RESIGN_REASON_PAGING_WITH_COMPANY + '?page=' + page + '&pageSize=' + size
    + '&companyid=' + companyid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  createResignReason(resignreason) {
    return this._Request.Request(constant.API_ADD_RESIGN_REASON, RequestMethod.Post, resignreason);
  }

  getResignReasoneById(id) {
    return this._Request.Request(constant.API_GET_RESIGN_REASON_BY_ID + id, RequestMethod.Get);
  }

  updateResignReason(resignreason) {
    return this._Request.Request(constant.API_UPDATE_RESIGN_REASON, RequestMethod.Put, resignreason);
  }

  deleteResignReason(id) {
    return this._Request.Request(constant.API_DELETE_RESIGN_REASON + '?id=' + id, RequestMethod.Delete);
  }
}
