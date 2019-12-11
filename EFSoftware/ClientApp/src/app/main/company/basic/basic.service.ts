import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../libs/request';
import { constant } from '../../../../constant/constant';

@Injectable()
export class BasicService {

  constructor(private _Request: CustomRequest) {

  }

  getCount(filterByName) {
    return this._Request.Request(constant.API_GET_LIST_COMPANY + '?filterByName=' + filterByName, RequestMethod.Get);
  }

  getCompanyList(page, size, filterByName) {
    return this._Request.Request(constant.API_GET_COMPANY_PAGING + '?page=' + page
    + '&pageSize=' + size + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  createCompany(company) {
    return this._Request.Request(constant.API_ADD_COMPANY, RequestMethod.Post, company);
  }

  // uploadFile(itemfile) {
  //   return this._Request.Request(constant.API_UPLOAD_FILE_IMAGE, RequestMethod.Post, itemfile)
  // }

  uploadFile(fileToUpload: File) {
    return this._Request.UploadFile(constant.API_UPLOAD_FILE_IMAGE, fileToUpload);
  }

  updateCompany(company) {
    return this._Request.Request(constant.API_UPDATE_COMPANY, RequestMethod.Put, company);
  }

  deleteCompany(id) {
    return this._Request.Request(constant.API_DELETE_COMPANY + '?id=' + id, RequestMethod.Delete);
  }

}
