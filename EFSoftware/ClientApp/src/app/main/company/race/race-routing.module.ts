import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaceListComponent } from './race-list/race-list.component';
import { RaceCreateComponent } from './race-create/race-create.component';
import { RaceEditComponent } from './race-edit/race-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: RaceListComponent
  },
  {
    path: 'create',
    component: RaceCreateComponent
  },
  {
    path: 'edit/:id',
    component: RaceEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaceRoutingModule { }
