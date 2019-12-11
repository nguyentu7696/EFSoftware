import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeService } from './employee.service';
import { NotificationService } from '../../../libs/notification';
import { ToastyModule } from 'ng2-toasty';
import { SharedModule } from '../../share.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ToastyModule,
    SharedModule,
    FormsModule
  ],
  declarations: [EmployeeCreateComponent],
  providers: [EmployeeService, NotificationService],
})
export class EmployeeModule { }
