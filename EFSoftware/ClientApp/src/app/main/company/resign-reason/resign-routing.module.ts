import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResignListComponent } from './resign-list/resign-list.component';
import { ResignCreateComponent } from './resign-create/resign-create.component';
import { ResignEditComponent } from './resign-edit/resign-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ResignListComponent
  },
  {
    path: 'create',
    component: ResignCreateComponent
  },
  {
    path: 'edit/:id',
    component: ResignEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResignRoutingModule { }
