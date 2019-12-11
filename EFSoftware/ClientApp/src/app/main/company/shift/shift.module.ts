import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { shiftRoutingModule } from './shift-routing.module';
import { shiftListComponent } from './shift-list/shift-list.component';
import { shiftCreateComponent } from './shift-create/shift-create.component';
import { shiftEditComponent } from './shift-edit/shift-edit.component';
import { shiftService } from './shift.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import {SharedModule} from '../../share.module';
import {NotificationService} from '../../../libs/notification';

@NgModule({
  imports: [
    CommonModule,
    shiftRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule,
  ],
  declarations: [shiftListComponent, shiftCreateComponent, shiftEditComponent],
  providers: [shiftService, NotificationService],
})
export class shiftModule { }
