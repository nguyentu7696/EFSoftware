import { constant } from '../../../../constant/constant';
import { Injectable } from '@angular/core';
import { CustomRequest } from '../../../libs/request';
import { RequestMethod, Http, Response } from '@angular/http';

@Injectable()
export class OtcodeService {

  constructor(private _Request: CustomRequest) { }

  getCount(companyid, filterByName) {
    return this._Request.Request(constant.API_GET_ALL_OT_CODE_WITH_COMPANY +
      '?companyid=' + companyid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getOtCodeList(page, size, companyid, filterByName) {
    return this._Request.Request(constant.API_GET_ALL_PAGING_OT_CODE_WITH_COMPANY +
      '?page=' + page + '&pageSize=' + size + '&companyid=' + companyid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getOtCodeById(id) {
    return this._Request.Request(constant.API_GET_ID_OT_CODE + id, RequestMethod.Get);
  }

  createOtCode(otcode) {
    return this._Request.Request(constant.API_ADD_OT_CODE, RequestMethod.Post, otcode);
  }

  updateOtCode(otcode) {
    return this._Request.Request(constant.API_UPDATE_OT_CODE, RequestMethod.Put, otcode);
  }

  deleteOtCode(id) {
    return this._Request.Request(constant.API_DELETE_OT_CODE + '?id=' + id, RequestMethod.Delete);
  }
}
