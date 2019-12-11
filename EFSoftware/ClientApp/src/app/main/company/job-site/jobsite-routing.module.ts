import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RosterModule } from './roster/roster.module';
import { JobSiteListComponent } from './jobsite-list/jobsite-list.component';
import { JobSiteCreateComponent } from './jobsite-create/jobsite-create.component';
import { JobSiteEditComponent } from './jobsite-edit/jobsite-edit.component';

import { OtsettingListComponent } from './otsetting/otsetting-list/otsetting-list.component';
import { OtsettingCreateComponent } from './otsetting/otsetting-create/otsetting-create.component';
import { OtsettingEditComponent } from './otsetting/otsetting-edit/otsetting-edit.component';

import { AllowanceJobsiteListComponent } from './allowance-jobsite/allowance-jobsite-list/allowance-jobsite-list.component';
import { AllowanceJobsiteEditComponent } from './allowance-jobsite/allowance-jobsite-edit/allowance-jobsite-edit.component';
import { AllowanceJobsiteCreateComponent } from './allowance-jobsite/allowance-jobsite-create/allowance-jobsite-create.component';

import { ZoneLocationListComponent } from './zone-location/zone-location-list/zone-location-list.component';
import { ZoneLocationCreateComponent } from './zone-location/zone-location-create/zone-location-create.component';
import { ZoneLocationEditComponent } from './zone-location/zone-location-edit/zone-location-edit.component';

import { LevelListComponent } from './level/level-list/level-list.component';
import { LevelCreateComponent } from './level/level-create/level-create.component';
import { LevelEditComponent } from './level/level-edit/level-edit.component';

import { AreaListComponent } from './area/area-list/area-list.component';
import { AreaCreateComponent } from './area/area-create/area-create.component';
import { AreaEditComponent } from './area/area-edit/area-edit.component';
import { LocationListComponent } from './location/location-list/location-list.component';
import { LocationCreateComponent } from './location/location-create/location-create.component';
import { LocationEditComponent } from './location/location-edit/location-edit.component';
import { ZoneListComponent } from './zone/zone-list/zone-list.component';
import { ZoneCreateComponent } from './zone/zone-create/zone-create.component';
import { ZoneEditComponent } from './zone/zone-edit/zone-edit.component';

import { ListComponent } from './shift/list/list.component';
import { CreateComponent } from './shift/create/create.component';
import { EditComponent } from './shift/edit/edit.component';
import { AddComponent } from './shift/add/add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: JobSiteListComponent
  },
  {
    path: 'create',
    component: JobSiteCreateComponent
  },
  {
    path: 'detail/edit',
    component: JobSiteEditComponent
  },
  //routing employees
  {
    path: 'detail/employee',
    loadChildren: './employees/employees.module#EmployeesModule',
    
  },
 
  //routing ot setting
  {
    path: 'detail/otsetting',
    component: OtsettingListComponent
  },
  {
    path: 'detail/otsetting/create',
    component: OtsettingCreateComponent
  },
  {
    path: 'detail/otsetting/edit/:id',
    component: OtsettingEditComponent
  },

  //routing allowance
  {
    path: 'detail/allowance',
    component: AllowanceJobsiteListComponent
  },
  {
    path: 'detail/allowance/create',
    component: AllowanceJobsiteCreateComponent
  },
  {
    path: 'detail/allowance/edit/:id',
    component: AllowanceJobsiteEditComponent
  },

  //routing zone location
  {
    path: 'detail/zone-location',
    component: ZoneLocationListComponent
  },
  {
    path: 'detail/zone-location/create',
    component: ZoneLocationCreateComponent
  },
  {
    path: 'detail/zone-location/edit/:id',
    component: ZoneLocationEditComponent
  },

  //routing level
  {
    path: 'detail/level/list',
    component: LevelListComponent
  },
  {
    path: 'detail/level/create',
    component: LevelCreateComponent
  },
  {
    path: 'detail/level/edit/:id',
    component: LevelEditComponent
  },

  //routing area
  {
    path: 'detail/area/list',
    component: AreaListComponent
  },
  {
    path: 'detail/area/create',
    component: AreaCreateComponent
  },
  {
    path: 'detail/area/edit/:id',
    component: AreaEditComponent
  },

  //routing Location
  {
    path: 'detail/location/list',
    component: LocationListComponent
  },
  {
    path: 'detail/location/create',
    component: LocationCreateComponent
  },
  {
    path: 'detail/location/edit/:id',
    component: LocationEditComponent
  },

  //routing Zone
  {
    path: 'detail/zone/list',
    component: ZoneListComponent
  },
  {
    path: 'detail/zone/create',
    component: ZoneCreateComponent
  },
  {
    path: 'detail/zone/edit/:id',
    component: ZoneEditComponent
  },

  // routing Shift

  {
    path: 'detail/job-site-shift',
    component: ListComponent
  },
  {
    path: 'detail/job-site-shift/create',
    component: CreateComponent
  },
  {
    path: 'detail/job-site-shift/edit/:id',
    component: EditComponent
  },
  {
    path: 'detail/job-site-shift/add/:id',
    component: AddComponent
  },
  {
    path: 'detail/roster',
    loadChildren: './roster/roster.module#RosterModule'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSiteRoutingModule { }
