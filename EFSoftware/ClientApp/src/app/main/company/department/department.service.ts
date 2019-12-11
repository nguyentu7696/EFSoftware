import { Injectable, Inject } from '@angular/core';
import { RequestMethod, Http, Response } from '@angular/http';
import { CustomRequest } from '../../../libs/request';
import { constant } from '../../../../constant/constant';

@Injectable()
export class DepartmentService {

  constructor(private _Request: CustomRequest) {

  }

  getCount(companyid, filterByName) {
    return this._Request.Request(constant.API_GET_LIST_DEPARTMENT_WITH_COMPANY + '?companyid=' + companyid
     + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  getDepartmentList(page, size, companyid, filterByName) {
    return this._Request.Request(constant.API_GET_DEPARTMENT_PAGING_WITH_COMPANY + '?page=' + page + '&pageSize=' + size
      + '&companyid=' + companyid + '&filterByName=' + filterByName, RequestMethod.Get);
  }

  createDepartment(department) {
    return this._Request.Request(constant.API_ADD_DEPARTMENT, RequestMethod.Post, department);
  }

  updateDepartment(department) {
    return this._Request.Request(constant.API_UPDATE_DEPARTMENT, RequestMethod.Put, department);
  }

  deleteDepartment(id) {
    return this._Request.Request(constant.API_DELETE_DEPARTMENT + '?id=' + id, RequestMethod.Delete);
  }

}
