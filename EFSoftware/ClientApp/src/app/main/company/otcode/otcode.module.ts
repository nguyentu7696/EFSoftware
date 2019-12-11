import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtcodeRoutingModule } from './otcode-routing.module';
import { OtcodeListComponent } from './otcode-list/otcode-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import {SharedModule} from '../../share.module';
import {NotificationService} from '../../../libs/notification';
import { OtcodeService } from './otcode.service';
import { SiteService } from '../site/site.service';
import { OtcodeCreateComponent } from './otcode-create/otcode-create.component';
import { OtcodeEditComponent } from './otcode-edit/otcode-edit.component';
import { MyDatePickerModule } from 'mydatepicker';
import { DateService } from '../../../providers/date-service';

@NgModule({
  imports: [
    CommonModule,
    OtcodeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule,
    MyDatePickerModule
  ],

  declarations: [OtcodeListComponent, OtcodeCreateComponent, OtcodeEditComponent],

  providers: [OtcodeService, NotificationService, SiteService, DateService],
})
export class OtcodeModule { }
