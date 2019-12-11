import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../libs/request';
import { constant } from '../../../../constant/constant';

@Injectable()
export class RaceService {

  constructor(private _Request: CustomRequest) {

  }

  getCount(companyid, filterByName) {
    return this._Request.Request(constant.API_GET_LIST_RACE_WITH_COMPANY + '?companyid=' + companyid
    + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getRaceListWithCompanyId(page, size, companyid, filterByName) {
    return this._Request.Request(constant.API_GET_RACE_PAGING + '?page=' + page + '&pageSize=' + size
      + '&companyid=' + companyid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getRaceList(page, size) {
    return this._Request.Request(constant.API_GET_ALL_PAGING + '?page=' + page + '&pageSize=' + size, RequestMethod.Get);
  }

  createRace(race) {
    return this._Request.Request(constant.API_ADD_RACE, RequestMethod.Post, race);
  }

  getRaceById(id) {
    return this._Request.Request(constant.API_GET_RACE_BY_ID + id, RequestMethod.Get);
  }

  updateRace(race) {
    return this._Request.Request(constant.API_UPDATE_RACE, RequestMethod.Put, race);
  }
}
