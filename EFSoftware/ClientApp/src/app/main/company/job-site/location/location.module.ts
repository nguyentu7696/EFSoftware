import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationCreateComponent } from './location-create/location-create.component';
import { LocationEditComponent } from './location-edit/location-edit.component';
import { LocationService } from './location.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import {SharedModule} from '../../../share.module';
import {NotificationService} from '../../../../libs/notification';

@NgModule({
  imports: [
    CommonModule,
    LocationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule
  ],
  declarations: [LocationListComponent, LocationCreateComponent, LocationEditComponent],
  providers: [LocationService, NotificationService],
})
export class LocationModule { }
