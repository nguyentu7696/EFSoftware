import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../../libs/request';
import { constant } from '../../../../../constant/constant';

@Injectable()
export class ZoneService {

  constructor(private _Request: CustomRequest) {

  }

  getCount(zonelocationid, filterByName) {
    return this._Request.Request(constant.API_GET_ALL_ZONE_WITH_ZONE_LOCATION + '?zonelocationid=' + zonelocationid
    + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getZoneList(page, size, zonelocationid, filterByName) {
    return this._Request.Request(constant.API_GET_LIST_ZONE_WITH_ZONE_LOCATION + '?page=' + page + '&pageSize=' + size
      + '&zonelocationid=' + zonelocationid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getListZoneLocation(jobSiteId) {
    return this._Request.Request(constant.API_GET_LIST_ZONE_LOCATION_WITH_JOBSITE + '?jobsiteid=' + jobSiteId, RequestMethod.Get);
  }

  createZone(zone) {
    return this._Request.Request(constant.API_ADD_ZONE, RequestMethod.Post, zone);
  }

  getZoneById(id) {
    return this._Request.Request(constant.API_GET_ZONE_BY_ID + id, RequestMethod.Get);
  }

  updateZone(zone) {
    return this._Request.Request(constant.API_UPDATE_ZONE, RequestMethod.Put, zone);
  }

  deleteZone(id) {
    return this._Request.Request(constant.API_DELETE_ZONE + '?id=' + id, RequestMethod.Delete);
  }

  //add by thuong start >>>
  getListShift(jobSiteId) {
    return this._Request.Request(constant.API_GET_ALL_SHIFT_WITH_JOB_SITE + '?jobsiteid=' + jobSiteId, RequestMethod.Get);
  }

  getListAllowance(companyId, jobSiteId) {
    return this._Request.Request(constant.API_GET_ALL_ALLOWANCE_JOBSITE_WITH_JOBSITE + '?companyid=' + companyId + '&jobsiteid=' + jobSiteId, RequestMethod.Get);
  }

  getListOtSetting(companyId, jobSiteId) {
    return this._Request.Request(constant.API_GET_ALL_OT_SETTING_WITH_JOBSITE + '?companyid=' + companyId + '&jobsiteid=' + jobSiteId, RequestMethod.Get);
  }
  //add by thuong end <<<

}
