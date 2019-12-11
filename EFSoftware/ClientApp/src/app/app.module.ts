import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './layout/login/login.component';
import { AuthGuard } from './guards/auth-guard.service';
import { JwtHelper } from 'angular2-jwt';
import {CustomRequest} from './libs/request';
import { AdminModule } from './layout/admin/admin.module';
import {SharedModule} from './main/share.module';
import { ToastyModule } from 'ng2-toasty';
import { NotificationService} from './libs/notification';
import { AuthenService } from './share/authen.service';

import { NgxSmartModalModule } from '../ngx-smart-modal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule,
    SharedModule,
    ToastyModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [AuthGuard, JwtHelper, CustomRequest, NotificationService, AuthenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
