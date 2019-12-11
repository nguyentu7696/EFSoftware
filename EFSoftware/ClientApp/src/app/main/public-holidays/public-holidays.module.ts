import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHolidaysRoutingModule } from './public-holidays-routing.module';
import { PublicHolidayListComponent} from './public-holiday-list/public-holiday-list.component';
import { PublicHolidayCreateComponent } from './public-holiday-create/public-holiday-create.component';
import { PublicHolidaysService } from './public-holidays.service';
import { NotificationService } from '../../libs/notification';
import { ToastyModule } from 'ng2-toasty';
import { SharedModule } from '../share.module';
import { FormsModule } from '@angular/forms';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { NgDatepickerModule } from 'ng2-datepicker';
@NgModule({
  imports: [
    CommonModule,
    PublicHolidaysRoutingModule,
    ToastyModule,
    SharedModule,
    FormsModule,
    AngularDateTimePickerModule,
    NgDatepickerModule
  ],
  declarations: [
    PublicHolidayListComponent,
    PublicHolidayCreateComponent
  ],
  providers: [PublicHolidaysService, NotificationService],
})
export class PublicHolidaysModule { }
