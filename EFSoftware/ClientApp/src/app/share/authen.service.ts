import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { SystemConstants } from '../libs/SystemConstant';
import { CustomRequest } from '../libs/request';
import { RequestMethod } from '@angular/http';

@Injectable()
export class AuthenService {
  constructor(private _Request: CustomRequest) { }

  login(login) 
    {
        return this._Request.makeRequest("api/Account/Login", RequestMethod.Post, login);
    }

  
}
