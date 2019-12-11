import { Injectable } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../libs/request';
import { constant } from '../../../../constant/constant';

@Injectable()
export class shiftService {

  constructor(private _Request: CustomRequest) { }

  getCount(companyid, filterByName) {
    return this._Request.Request(constant.API_GET_ALL_shift_WITH_COMPANY + '?companyid=' + companyid
    + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getshiftList(page, size, companyid, filterByName) {
    return this._Request.Request(constant.API_GET_ALL_PAGING_shift_WITH_COMPANY + '?page=' + page + '&pageSize=' + size
      + '&companyid=' + companyid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  createshift(shift) {
    return this._Request.Request(constant.API_ADD_shift, RequestMethod.Post, shift);
  }

  getshiftById(id) {
    return this._Request.Request(constant.API_GET_shift_BY_ID + id, RequestMethod.Get);
  }

  updateshift(shift) {
    return this._Request.Request(constant.API_UPDATE_shift, RequestMethod.Put, shift);
  }

  deleteshift(id) {
    return this._Request.Request(constant.API_DELETE_shift + '?id=' + id, RequestMethod.Delete);
  }
}
