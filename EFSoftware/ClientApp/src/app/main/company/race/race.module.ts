import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceRoutingModule } from './race-routing.module';
import { RaceListComponent} from './race-list/race-list.component';
import { RaceCreateComponent } from './race-create/race-create.component';
import { RaceEditComponent } from './race-edit/race-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import {SharedModule} from '../../share.module';
import {NotificationService} from '../../../libs/notification';
import { RaceService } from './race.service';
import { SiteService } from '../site/site.service';
@NgModule({
  imports: [
    CommonModule,
    RaceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule
  ],
  declarations: [
    RaceListComponent,
    RaceCreateComponent,
    RaceEditComponent
  ],
  providers: [RaceService, NotificationService, SiteService],
})
export class RaceModule { }
