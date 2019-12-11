import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../libs/request'
import { constant } from '../../../constant/constant';

@Injectable()
export class PublicHolidaysService {

  constructor(private _Request: CustomRequest) {

  }

  getListCompnay() {
    return this._Request.Request(constant.API_GET_LIST_COMPANY, RequestMethod.Get);
  }

  getCount(country, year, keySearch) {
    return this._Request.Request(constant.API_GET_LIST_GLOBAL_HOLIDAYS_WITH_COUNTRY_YEAR + '?country=' + country +
    '&year=' + year + '&keySearch=' + keySearch, RequestMethod.Get);
  }

  getPublicHolidayList(page, size, country, year, keySearch, orderByEvent, orderByFrom, orderByTo) {
    return this._Request.Request(constant.API_GET_LIST_GLOBAL_HOLIDAYS_WITH_COUNTRY_YEAR_PAGING + '?page=' + page +
    '&pageSize=' + size + '&country=' + country + '&year=' + year + '&keySearch=' + keySearch +
    '&orderByEvent=' + orderByEvent + '&orderByFrom=' + orderByFrom + '&orderByTo=' + orderByTo, RequestMethod.Get);
  }

  createPublicHoliday(attendance) {
    console.log('attendance', attendance);
    return this._Request.Request(constant.API_ADD_GLOBAL_HOLIDAYS, RequestMethod.Post, attendance);
  }

  updatePublicHoliday(attendance) {
    return this._Request.Request(constant.API_UPDATE_GLOBAL_HOLIDAYS, RequestMethod.Put, attendance);
  }

  deletePublicHoliday(id) {
    return this._Request.Request(constant.API_DELETE_GLOBAL_HOLIDAYS + '?id=' + id, RequestMethod.Delete);
  }

  getJsonCountry() {
    return this._Request.getCountries();
  }

}
