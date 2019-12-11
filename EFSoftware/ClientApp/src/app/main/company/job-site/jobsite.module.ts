import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobSiteRoutingModule } from './jobsite-routing.module';
import { JobSiteListComponent } from './jobsite-list/jobsite-list.component';
import { JobSiteCreateComponent } from './jobsite-create/jobsite-create.component';
import { JobSiteEditComponent } from './jobsite-edit/jobsite-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import { SharedModule } from '../../share.module';
import { NotificationService } from '../../../libs/notification';
import { JobSiteService } from './jobsite.service';
import { SiteService } from '../site/site.service';

import { EmployeesService } from './employees/employees.service';

import { OtsettingModule } from './otsetting/otsetting.module';

import { AllowanceJobsiteModule } from './allowance-jobsite/allowance-jobsite.module';

import { JobsiteShiftModule } from './shift/shift.module';

import { ZoneLocationModule } from './zone-location/zone-location.module';

import { LevelModule } from './level/level.module';

import { AreaModule } from './area/area.module';

import { LocationModule } from './location/location.module';

import { ZoneModule } from './zone/zone.module';

import { RosterModule } from './roster/roster.module';

import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { from } from 'rxjs/observable/from';

@NgModule({
  imports: [
    CommonModule,
    JobSiteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule,
    AngularDateTimePickerModule,
    ZoneLocationModule,
    ZoneModule,
    LevelModule,
    AreaModule,
    LocationModule,
    RosterModule,
    OtsettingModule,
    AllowanceJobsiteModule,
    JobsiteShiftModule
  ],
  declarations: [
    JobSiteListComponent,
    JobSiteCreateComponent,
    JobSiteEditComponent,

  ],
  providers: [
    JobSiteService,
    NotificationService,
    SiteService,
    EmployeesService,
  ],
})
export class JobSiteModule { }
