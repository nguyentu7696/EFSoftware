import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import {SharedModule} from '../../../share.module';
import {NotificationService} from '../../../../libs/notification';
import { ZoneService } from './zone.service';
import { ZoneRoutingModule } from './zone-routing.module';
import { ZoneListComponent } from './zone-list/zone-list.component';
import { ZoneCreateComponent } from './zone-create/zone-create.component';
import { ZoneEditComponent } from './zone-edit/zone-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ZoneRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule
  ],
  declarations: [ZoneListComponent, ZoneCreateComponent, ZoneEditComponent],
  providers: [ZoneService, NotificationService],
})
export class ZoneModule { }
