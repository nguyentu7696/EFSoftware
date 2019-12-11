import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllowanceRoutingModule } from './allowance-routing.module';
import { AllowanceListComponent } from './allowance-list/allowance-list.component';
import { AllowanceCreateComponent } from './allowance-create/allowance-create.component';
import { AllowanceEditComponent } from './allowance-edit/allowance-edit.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import {SharedModule} from '../../share.module';
import {NotificationService} from '../../../libs/notification';
import { AllowanceService } from './allowance.service';
import { MyDatePickerModule } from 'mydatepicker';
import { DateService } from '../../../providers/date-service';

@NgModule({
  imports: [
    CommonModule,
    AllowanceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule,
    MyDatePickerModule
  ],
  declarations: [
    AllowanceListComponent,
    AllowanceCreateComponent,
    AllowanceEditComponent],

  providers: [
    AllowanceService,
    NotificationService,
    DateService],
})
export class AllowanceModule { }
