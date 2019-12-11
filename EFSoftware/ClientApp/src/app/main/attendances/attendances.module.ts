import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendancesRoutingModule } from './attendances-routing.module';
import { AttendanceListComponent} from './attendance-list/attendance-list.component';
import { AttendanceCreateComponent } from './attendance-create/attendance-create.component';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {HttpClientModule} from '@angular/common/http';
import { ToastyModule } from 'ng2-toasty';
import {SharedModule} from '../share.module';
import {NotificationService} from '../../libs/notification';
import { AttendancesService } from './attendances.service';

//import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    AttendancesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    // HttpClientModule,
    ToastyModule,
    SharedModule,
    //NgxDatatableModule
  ],
  declarations: [
    AttendanceListComponent,
    AttendanceCreateComponent,
    AttendanceEditComponent
  ],
  providers: [AttendancesService, NotificationService],
})
export class AttendancesModule { }
