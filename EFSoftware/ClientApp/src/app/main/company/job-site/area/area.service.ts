import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../../libs/request';
import { constant } from '../../../../../constant/constant';
@Injectable()
export class AreaService {
  constructor(private _Request: CustomRequest) {

  }

  getCount(zonelocationid, filterByName) {
    return this._Request.Request(constant.API_GET_ALL_AREA_WITH_ZONE_LOCATION + '?zonelocationid=' + zonelocationid
    + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getAreaListWithZoneLocationId(page, size, zonelocationid, filterByName) {
    return this._Request.Request(constant.API_GET_LIST_AREA_WITH_ZONE_LOCATION + '?page=' + page + '&pageSize=' + size
      + '&zonelocationid=' + zonelocationid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getAreaList(page, size) {
    return this._Request.Request(constant.API_GET_ALL_PAGING + '?page=' + page + '&pageSize=' + size, RequestMethod.Get);
  }

  createArea(area) {
    return this._Request.Request(constant.API_ADD_AREA, RequestMethod.Post, area);
  }

  getAreaById(id) {
    return this._Request.Request(constant.API_GET_AREA_BY_ID + id, RequestMethod.Get);
  }

  updateArea(area) {
    return this._Request.Request(constant.API_UPDATE_AREA, RequestMethod.Put, area);
  }

  deleteArea(id) {
    return this._Request.Request(constant.API_DELETE_AREA + '?id=' + id, RequestMethod.Delete);
  }
}
