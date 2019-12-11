import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoneLocationListComponent } from './zone-location-list/zone-location-list.component';
import { ZoneLocationCreateComponent } from './zone-location-create/zone-location-create.component';
import { ZoneLocationEditComponent } from './zone-location-edit/zone-location-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ZoneLocationListComponent
  },
  {
    path: 'create',
    component: ZoneLocationCreateComponent
  },
  {
    path: 'edit/:id',
    component: ZoneLocationEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoneLocationRoutingModule { }
