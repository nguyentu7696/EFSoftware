import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  // {
  //   path: 'list',
  //   component: EmployeeListComponent
  // },
  {
    path: 'create',
    component: EmployeeCreateComponent
  },
  // {
  //   path: 'edit/:id',
  //   component: PublicHolidayEditComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
