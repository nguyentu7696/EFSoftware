import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../../libs/request';
import { constant } from '../../../../../constant/constant';

@Injectable()
export class LevelService {

  constructor(private _Request: CustomRequest) {

  }

  getCount(zonelocationid, filterByName) {
    return this._Request.Request(constant.API_GET_ALL_LEVEL_WITH_ZONE_LOCATION + '?zonelocationid=' + zonelocationid
    + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getLevelListWithZoneLocationId(page, size, zonelocationid, filterByName) {
    return this._Request.Request(constant.API_GET_LIST_LEVEL_WITH_ZONE_LOCATION + '?page=' + page + '&pageSize=' + size
      + '&zonelocationid=' + zonelocationid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  createLevel(level) {
    return this._Request.Request(constant.API_ADD_LEVEL, RequestMethod.Post, level);
  }

  getLevelById(id) {
    return this._Request.Request(constant.API_GET_LEVEL_BY_ID + id, RequestMethod.Get);
  }

  updateLevel(level) {
    return this._Request.Request(constant.API_UPDATE_LEVEL, RequestMethod.Put, level);
  }

  deleteLevel(id) {
    return this._Request.Request(constant.API_DELETE_LEVEL + '?id=' + id, RequestMethod.Delete);
  }
}
