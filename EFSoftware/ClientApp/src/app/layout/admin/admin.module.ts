import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotificationService } from '../../libs/notification';
import { ToastyModule } from 'ng2-toasty';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './menu/menu.component';
import { UserListComponent } from '../../main/user/user-list/user-list.component';
import {UserService} from '../../main/user/user.service';
import {JobsiteComponent} from '../../main/jobsite/jobsite.component';
import {JobsiteService} from '../../main/jobsite/jobsite.service';
import {DashboardComponent} from '../../main/dashboard/dashboard/dashboard.component';
import {DashboardService} from '../../main/dashboard/dashboard.service';
import { EmployeesService } from '../../main/company/job-site/employees/employees.service';
import { NgxSmartModalModule } from '../../../ngx-smart-modal';
import { NgxSmartModalService } from '../../../ngx-smart-modal';
import { MyDatePickerModule } from 'mydatepicker';
import { DateService } from '../../providers/date-service';

import { CalendarModule } from 'angular-calendar';
import { CustomDateFormatter } from '../../providers/custom-date-formatter';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastyModule,
    NgbModule,
    NgxSmartModalModule.forChild(),
    CalendarModule,
    CalendarModule.forRoot(),
    AngularDateTimePickerModule,
    MyDatePickerModule
  ],
  declarations: [
    AdminComponent,
    MenuComponent,
    UserListComponent,
    JobsiteComponent,
    DashboardComponent
  ],
  providers: [
    NotificationService,
    JobsiteService,
    UserService,
    DashboardService,
    NgxSmartModalService,
    CustomDateFormatter,
    EmployeesService,
    DateService
  ]
})
export class AdminModule { }
