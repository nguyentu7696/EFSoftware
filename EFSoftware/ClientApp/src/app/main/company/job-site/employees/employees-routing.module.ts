import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesCreateComponent } from './employees-create/employees-create.component';
import { EmployeesEventComponent } from './employees-event/employees-event.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: EmployeesListComponent
  },
  {
    path: 'create',
    component: EmployeesCreateComponent
  },
  {
    path: 'edit/:id',
    component: EmployeesEditComponent
  },
  {
    path: 'event/:id',
    component: EmployeesEventComponent
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
