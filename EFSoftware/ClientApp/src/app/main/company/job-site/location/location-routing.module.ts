import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationCreateComponent } from './location-create/location-create.component';
import { LocationEditComponent } from './location-edit/location-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: LocationListComponent
  },
  {
    path: 'create',
    component: LocationCreateComponent
  },
  {
    path: 'edit/:id',
    component: LocationEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
