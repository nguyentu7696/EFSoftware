import { Injectable } from '@angular/core';
import { CustomRequest } from '../../../../libs/request';
import { RequestMethod, Http, Response } from '@angular/http';
import { constant } from '../../../../../constant/constant';

@Injectable()
export class OtsettingService {

  constructor(private _Request: CustomRequest) { }

  getCount(companyid, jobsiteid, filterByName) {
    return this._Request.Request(constant.API_GET_ALL_OT_SETTING_WITH_JOBSITE +
      '?companyid=' + companyid + '&jobsiteid=' + jobsiteid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getOtSettingList(page, size, companyid, jobsiteid, filterByName) {
    return this._Request.Request(constant.API_GET_ALL_PAGING_OT_SETTING_WITH_JOBSITE +
      '?page=' + page + '&pageSize=' + size + '&companyid=' + companyid + '&jobsiteid=' + jobsiteid
       + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getOtCodeActiveList(companyid) {
    return this._Request.Request(constant.API_GET_ALL_OT_CODE_WITH_COMPANY + '?companyid=' + companyid, RequestMethod.Get);
  }

  getOtSettingById(id) {
    return this._Request.Request(constant.API_GET_OT_SETTING_BY_ID + id, RequestMethod.Get);
  }

  createOtSetting(otsetting) {
    return this._Request.Request(constant.API_ADD_OT_SETTING, RequestMethod.Post, otsetting);
  }

  addOtSetting(otsetting) {
    return this._Request.Request(constant.API_ADD_FROM_COMPANY_OT_CODE, RequestMethod.Post, otsetting);
  }

  updateOtSetting(otsetting) {
    return this._Request.Request(constant.API_UPDATE_OT_SETTING, RequestMethod.Put, otsetting);
  }

  deleteOtSetting(id) {
    return this._Request.Request(constant.API_DELETE_OT_SETTING + '?id=' + id, RequestMethod.Delete);
  }

  getOTMaxSetting(jobsiteid) {
    return this._Request.Request(constant.API_GET_OT_MAX_SETTING_BY_JOBSITE + "?jobsiteid=" + jobsiteid, RequestMethod.Get);
  }

  updateOTMaxSetting(otmaxsetting) {
    if (otmaxsetting.id) {
      return this._Request.Request(constant.API_UPDATE_OT_MAX_SETTING, RequestMethod.Put, otmaxsetting);
    } else {
      return this._Request.Request(constant.API_ADD_OT_MAX_SETTING, RequestMethod.Post, otmaxsetting);
    }
  }

}
