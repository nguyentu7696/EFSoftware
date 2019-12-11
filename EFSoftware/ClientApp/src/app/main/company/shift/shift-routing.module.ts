import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { shiftListComponent } from './shift-list/shift-list.component';
import { shiftCreateComponent } from './shift-create/shift-create.component';
import { shiftEditComponent } from './shift-edit/shift-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: shiftListComponent
  },
  {
    path: 'create',
    component: shiftCreateComponent
  },
  {
    path: 'edit/:id',
    component: shiftEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class shiftRoutingModule { }
