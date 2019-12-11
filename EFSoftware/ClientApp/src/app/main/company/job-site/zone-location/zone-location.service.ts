import { Injectable } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../../libs/request';
import { constant } from '../../../../../constant/constant';

@Injectable()
export class ZoneLocationService {

  constructor(private _Request: CustomRequest) { }

  createZoneLocation(zonelocation) {
    return this._Request.Request(constant.API_ADD_ZONE_LOCATION, RequestMethod.Post, zonelocation);
  }

  updateZoneLocation(zonelocation) {
    return this._Request.Request(constant.API_UPDATE_ZONE_LOCATION, RequestMethod.Put, zonelocation);
  }

  deleteZoneLocation(id) {
    return this._Request.Request(constant.API_DELETE_ZONE_LOCATION + '/?id=' + id, RequestMethod.Delete);
  }

  getCount(companyid, departmentid, siteid, jobsiteid, filterByName) {
    return this._Request.Request('api/TMSZoneLocation/GetAll?companyid=' + companyid + '&departmentid=' + departmentid +
    '&siteid=' + siteid + '&jobsiteid=' + jobsiteid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getListZoneLocation(page, size, companyid, departmentid, siteid, jobsiteid, filterByName) {
    return this._Request.Request('api/TMSZoneLocation/GetAllPaging?page=' + page + '&pageSize=' + size
    + '&companyid=' + companyid + '&departmentid=' + departmentid
    + '&siteid=' + siteid + '&jobsiteid=' + jobsiteid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getZoneLocationById(id) {
    return this._Request.Request('api/TMSZoneLocation/GetById/' + id, RequestMethod.Get);
  }

  GetByJobsiteId(id) {
    return this._Request.Request('api/TMSZoneLocation/GetByJobsiteId/' + id, RequestMethod.Get);
  }


}
