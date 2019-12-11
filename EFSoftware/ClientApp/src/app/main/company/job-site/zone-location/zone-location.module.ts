import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoneLocationRoutingModule } from './zone-location-routing.module';
import { ZoneLocationListComponent } from './zone-location-list/zone-location-list.component';
import { ZoneLocationCreateComponent } from './zone-location-create/zone-location-create.component';
import { ZoneLocationEditComponent } from './zone-location-edit/zone-location-edit.component';
import { ZoneLocationService } from './zone-location.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import {SharedModule} from '../../../share.module';
import {NotificationService} from '../../../../libs/notification';
import { JobSiteService } from '../jobsite.service';


@NgModule({
  imports: [
    CommonModule,
    ZoneLocationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule,
  ],
  declarations: [ZoneLocationListComponent, ZoneLocationCreateComponent, ZoneLocationEditComponent],
  providers: [ZoneLocationService, NotificationService, JobSiteService],
})
export class ZoneLocationModule { }
