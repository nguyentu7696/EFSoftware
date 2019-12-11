import { Injectable } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../../libs/request';
import { constant } from '../../../../../constant/constant';

@Injectable()
export class LocationService {

  constructor(private _Request: CustomRequest) { }

  getCount(zonelocationid, filterByName) {
    return this._Request.Request(constant.API_GET_ALL_LOCATION_WITH_ZONE_LOCATION + '?zonelocationid=' + zonelocationid
    + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getLocationListWithZoneLocationId(page, size, zonelocationid, filterByName) {
    return this._Request.Request(constant.API_GET_LIST_LOCATION_WITH_ZONE_LOCATION + '?page=' + page + '&pageSize=' + size
      + '&zonelocationid=' + zonelocationid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  createLocation(location) {
    return this._Request.Request(constant.API_ADD_LOCATION, RequestMethod.Post, location);
  }

  getLocationById(id) {
    return this._Request.Request(constant.API_GET_LOCATION_BY_ID + id, RequestMethod.Get);
  }

  updateLocation(location) {
    return this._Request.Request(constant.API_UPDATE_LOCATION, RequestMethod.Put, location);
  }

  deleteLocation(id) {
    return this._Request.Request(constant.API_DELETE_LOCATION + '?id=' + id, RequestMethod.Delete);
  }
}
