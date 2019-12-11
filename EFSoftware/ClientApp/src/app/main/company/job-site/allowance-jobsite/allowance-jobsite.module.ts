import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllowanceJobsiteRoutingModule } from './allowance-jobsite-routing.module';
import { AllowanceJobsiteListComponent } from './allowance-jobsite-list/allowance-jobsite-list.component';
import { AllowanceJobsiteCreateComponent } from './allowance-jobsite-create/allowance-jobsite-create.component';
import { AllowanceJobsiteEditComponent } from './allowance-jobsite-edit/allowance-jobsite-edit.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import {SharedModule} from '../../../share.module';
import {NotificationService} from '../../../../libs/notification';
import { AllowanceJobsiteService } from './allowance-jobsite.service';

import { MyDatePickerModule } from 'mydatepicker';
import { DateService } from '../../../../providers/date-service';

@NgModule({
  imports: [
    CommonModule,
    AllowanceJobsiteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule,
    MyDatePickerModule
  ],
  declarations: [
    AllowanceJobsiteListComponent,
    AllowanceJobsiteCreateComponent,
    AllowanceJobsiteEditComponent,
  ],

  providers: [AllowanceJobsiteService, NotificationService, DateService],

})
export class AllowanceJobsiteModule { }
