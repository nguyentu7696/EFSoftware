import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtsettingRoutingModule } from './otsetting-routing.module';
import { OtsettingListComponent } from './otsetting-list/otsetting-list.component';
import { OtsettingCreateComponent } from './otsetting-create/otsetting-create.component';
import { OtsettingEditComponent } from './otsetting-edit/otsetting-edit.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import {SharedModule} from '../../../share.module';
import {NotificationService} from '../../../../libs/notification';
import { OtsettingService } from './otsetting.service';

import { MyDatePickerModule } from 'mydatepicker';
import { DateService } from '../../../../providers/date-service';

@NgModule({
  imports: [
    CommonModule,
    OtsettingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule,
    MyDatePickerModule
  ],
  declarations: [
    OtsettingListComponent,
    OtsettingCreateComponent,
    OtsettingEditComponent],


    providers: [
      NotificationService,
      OtsettingService,
      DateService],
})
export class OtsettingModule { }
