import { constant } from '../../../../constant/constant';
import { Injectable } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../libs/request';


@Injectable(
)
export class EmployeeService {

  constructor(private _Request: CustomRequest) { 

  }

  getCount() {
    return this._Request.Request(constant.API_GET_LIST_COMPANY, RequestMethod.Get);
  }

  getCompanyList(page, size) {
    return this._Request.Request(constant.API_GET_COMPANY_PAGING + "?page=" + page + "&pageSize=" + size, RequestMethod.Get)
  }

  createCompany(company) {
    return this._Request.Request(constant.API_ADD_COMPANY, RequestMethod.Post, company)
  }

  

  uploadFile(fileToUpload: File) {
    return this._Request.UploadFile(constant.API_UPLOAD_FILE_IMAGE, fileToUpload);
  }

  updateCompany(company) {
    return this._Request.Request(constant.API_UPDATE_COMPANY, RequestMethod.Put, company)
  }

  deleteCompany(id) {
    return this._Request.Request(constant.API_DELETE_COMPANY + "?id=" + id, RequestMethod.Delete);
  }
}
