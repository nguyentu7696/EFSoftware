import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtsettingListComponent } from './otsetting-list/otsetting-list.component';
import { OtsettingCreateComponent } from './otsetting-create/otsetting-create.component';
import { OtsettingEditComponent } from './otsetting-edit/otsetting-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: OtsettingListComponent
  },
  {
    path: 'create',
    component: OtsettingCreateComponent
  },
  {
    path: 'edit/:id',
    component: OtsettingEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtsettingRoutingModule { }
