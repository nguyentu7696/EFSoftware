import { constant } from '../../../../constant/constant';
import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../libs/request';

@Injectable()
export class PublicHolidayService {

  constructor(private _Request: CustomRequest) {

  }

  getCount(country, year, companyid, filterByName) {
    return this._Request.Request(constant.API_GET_LIST_PUBLIC_HOLIDAY_WITH_COMPANY + '?country=' + country + '&year=' + year
      + '&companyid=' + companyid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getPublicHolidayList(page, size, country, year, companyid, filterByName) {
    return this._Request.Request(constant.API_GET_PUBLIC_HOLIDAY_PAGING_WITH_COMPANY + '?page=' + page + '&pageSize=' + size
      + '&country=' + country + '&year=' + year + '&companyid=' + companyid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  createPublicHoliday(publicholiday) {
    return this._Request.Request(constant.API_ADD_PUBLIC_HOLIDAY, RequestMethod.Post, publicholiday);
  }

  updatePublicHoliday(publicholiday) {
    return this._Request.Request(constant.API_UPDATE_PUBLIC_HOLIDAY, RequestMethod.Put, publicholiday);
  }

  deletePublicHoliday(id) {
    return this._Request.Request(constant.API_DELETE_PUBLIC_HOLIDAY + '?id=' + id, RequestMethod.Delete);
  }

  getJsonCountry() {
    return this._Request.getCountries();
  }

  // getPublicHolidayGlobal(country, year) {
  //   return this._Request.Request(constant.API_GET_LIST_GLOBAL_HOLIDAYS_WITH_COUNTRY_YEAR + "?country=" + country +
  //   "&year=" + year, RequestMethod.Get);
  // }

  getPublicHolidayGlobalAll() {
    return this._Request.Request(constant.API_GET_LIST_GLOBAL_HOLIDAYS, RequestMethod.Get);
  }

  getPublicHolidayById(id) {
    return this._Request.Request(constant.API_GET_PUBLIC_HOLIDAY_BY_ID + id, RequestMethod.Get);
  }

}
