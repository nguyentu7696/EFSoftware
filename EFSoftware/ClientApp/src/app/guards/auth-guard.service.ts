import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { JwtHelper } from 'angular2-jwt';
import { SystemConstants } from '../libs/SystemConstant';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelper, private router: Router) {
  }
  async canActivate() {
    var token = localStorage.getItem(SystemConstants.CURRENT_USER);
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    this.router.navigate(["login"]);
    return false;
  }


}