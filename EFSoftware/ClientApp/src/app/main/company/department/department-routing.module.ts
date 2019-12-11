import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { DataStorage } from '../../../providers/data/data';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: DepartmentListComponent
  },
  {
    path: 'create',
    component: DepartmentCreateComponent
  },
  {
    path: 'update',
    component:DepartmentCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[DataStorage],
})
export class DepartmentRoutingModule { }
