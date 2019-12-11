import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceRoutingModule } from './attendance-routing.module';
import { AttendanceListComponent} from './attendance-list/attendance-list.component';
import { AttendanceCreateComponent } from './attendance-create/attendance-create.component';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import {SharedModule} from '../../share.module';
import {NotificationService} from '../../../libs/notification';
import { AttendanceService } from './attendance.service';
import { SiteService } from '../site/site.service';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule,
    MyDatePickerModule
  ],
  declarations: [
    AttendanceListComponent,
    AttendanceCreateComponent,
    AttendanceEditComponent
  ],
  providers: [AttendanceService, NotificationService, SiteService],
})
export class AttendanceModule { }
