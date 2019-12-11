import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResignRoutingModule } from './resign-routing.module';
import { ResignListComponent} from './resign-list/resign-list.component';
import { ResignCreateComponent } from './resign-create/resign-create.component';
import { ResignEditComponent } from './resign-edit/resign-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import {SharedModule} from '../../share.module';
import {NotificationService} from '../../../libs/notification';
import { ResignService } from './resign.service';
import { SiteService } from '../site/site.service';
import { MyDatePickerModule } from 'mydatepicker';
import { DateService } from '../../../providers/date-service';
@NgModule({
  imports: [
    CommonModule,
    ResignRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule,
    MyDatePickerModule
  ],
  declarations: [
    ResignListComponent,
    ResignCreateComponent,
    ResignEditComponent
  ],
  providers: [ResignService, NotificationService, SiteService, DateService],
})
export class ResignModule { }
