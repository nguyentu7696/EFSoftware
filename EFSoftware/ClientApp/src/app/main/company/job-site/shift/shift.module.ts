import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftRoutingModule } from './shift-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import { SharedModule } from '../../../share.module';
import { NotificationService } from '../../../../libs/notification';
import { ShiftService } from './shift.service';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { MyDatePickerModule } from 'mydatepicker';
import { DateService } from '../../../../providers/date-service';

@NgModule({
  imports: [
    CommonModule,
    ShiftRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule,
    AngularDateTimePickerModule,
    MyDatePickerModule
  ],
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent,
    AddComponent
  ],


  providers: [
    NotificationService,
    ShiftService,
    DateService],
})
export class JobsiteShiftModule { }
