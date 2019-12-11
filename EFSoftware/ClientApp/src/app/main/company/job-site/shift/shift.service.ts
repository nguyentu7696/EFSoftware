import { Injectable } from '@angular/core';
import { CustomRequest } from '../../../../libs/request';
import { RequestMethod, Http, Response } from '@angular/http';
import { constant } from '../../../../../constant/constant';

@Injectable()
export class ShiftService {

  constructor(private _Request: CustomRequest) { }

  getCount(jobsiteId, filterByName) {
    return this._Request.Request(constant.API_GET_ALL_SHIFT_WITH_JOB_SITE + '?jobsiteid=' + jobsiteId
    + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getShiftList(page, size, jobsiteId, filterByName) {
    return this._Request.Request(constant.API_GET_LIST_SHIFT_WITH_JOB_SITE + '?page=' + page + '&pageSize=' + size
      + '&jobsiteid=' + jobsiteId + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  createShift(shift) {
    return this._Request.Request('api/TMSShiftJobSite/Add', RequestMethod.Post, shift);
  }

  addShift(shift) {
    return this._Request.Request('api/TMSShiftJobSite/AddFromCompany', RequestMethod.Post, shift);
  }

  getListShiftCode() {
    return this._Request.Request('api/TMSShift/GetAllActive', RequestMethod.Get);
  }

  getShiftById(id) {
    return this._Request.Request(constant.API_GET_SHIFT_BY_ID + id, RequestMethod.Get);
  }

  updateShift(shift) {
    return this._Request.Request(constant.API_UPDATE_SHIFT, RequestMethod.Put, shift);
  }

  deleteShift(id) {
    return this._Request.Request(constant.API_DELETE_SHIFT + '?id=' + id, RequestMethod.Delete);
  }
  getShiftMainCode(id) {
    return this._Request.Request('api/TMSShift/GetById/' + id, RequestMethod.Get);
  }
}
