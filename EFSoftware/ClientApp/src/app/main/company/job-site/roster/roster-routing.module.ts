import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RosterListComponent } from './roster-list/roster-list.component';
import { RosterDuplicateComponent } from './roster-duplicate/roster-duplicate.component';
import { RosterEditComponent } from './roster-edit/roster-edit.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list/:id',
    component: RosterListComponent
  },
  {
    path: 'edit/:id',
    component: RosterEditComponent
  },
  {
    path: 'duplicate/:id',
    component: RosterDuplicateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RosterRoutingModule { }
