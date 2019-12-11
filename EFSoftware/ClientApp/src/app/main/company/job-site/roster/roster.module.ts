import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import { SharedModule } from '../../../share.module';
import { NotificationService } from '../../../../libs/notification';
import { RosterService } from './roster.service';
import { RosterRoutingModule } from './roster-routing.module';
import { RosterListComponent } from './roster-list/roster-list.component';
import { RosterDuplicateComponent } from './roster-duplicate/roster-duplicate.component';
import { RosterEditComponent } from './roster-edit/roster-edit.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PublicHolidayService } from '../../public-holiday/public-holiday.service';
import { EmployeesService } from '../employees/employees.service';

@NgModule({
  imports: [
    CommonModule,
    RosterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule,
    AngularDateTimePickerModule,
    ModalModule.forRoot()
  ],
  declarations: [RosterListComponent, RosterDuplicateComponent, RosterEditComponent],
  providers: [RosterService, NotificationService, PublicHolidayService, EmployeesService],
})
export class RosterModule { }
