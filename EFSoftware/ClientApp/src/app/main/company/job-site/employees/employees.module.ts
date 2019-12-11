import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import { SharedModule } from '../../../share.module';
import { NotificationService } from '../../../../libs/notification';
import { EmployeesService } from './employees.service';
import { EmployeesEventComponent } from './employees-event/employees-event.component';
import { BasicService } from '../../basic/basic.service';
import { MyDatePickerModule } from 'mydatepicker';
import { DateService } from '../../../../providers/date-service';
import {ResignService} from '../../resign-reason/resign.service';
@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule,
    MyDatePickerModule
  ],
  declarations: [
    EmployeesListComponent,
    EmployeesCreateComponent,
    EmployeesEditComponent,
    EmployeesEventComponent,

  ],
  providers: [
    EmployeesService, 
    NotificationService,
    BasicService,
    DateService,
    ResignService
  ],
})
export class EmployeesModule { }
