import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SystemConstants } from '../../libs/SystemConstant';
import { Router } from '@angular/router';
import { AuthenService } from '../../share/authen.service';
import { NotificationService } from '../../libs/notification';
import { DataStorage } from '../../providers/data/data';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentUserLogin: any = {};
  constructor(private router: Router, private _authenService: AuthenService, private _notificationService : NotificationService) { }
  
  ngOnInit() {
    this.currentUserLogin = DataStorage.getCurrentUserLogin();
    const userLogin = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
    var token = userLogin.token;
    // if(token) {
    //   this.router.navigate(['/company/']);
    // }
  }

  login(form: NgForm) {
    this._authenService.login(form.value).subscribe(
      result => {
        if(result.success)
        {
          localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(result.data));
          result.data.name = form.value.username;
          DataStorage.setCurrentUserLogin(result.data);
        
          this._notificationService.SuccessNotification("Login successfully");
          setTimeout(() => {
            this.router.navigate(['/dashboard/']);
          }, 1000);    
        }
        else{
          this._notificationService.ErrorNotification("User name or Password incorrect");
        }
        
      }
    )
  }

}
