import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import {SharedModule} from '../../../share.module';
import {NotificationService} from '../../../../libs/notification';
import { AreaService } from './area.service';
import { AreaRoutingModule } from './area-routing.module';
import { AreaListComponent } from './area-list/area-list.component';
import { AreaCreateComponent } from './area-create/area-create.component';
import { AreaEditComponent } from './area-edit/area-edit.component';

@NgModule({
  imports: [
    CommonModule,
    AreaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule
  ],
  declarations: [AreaListComponent, AreaCreateComponent, AreaEditComponent],
  providers: [AreaService, NotificationService],
})
export class AreaModule { }
