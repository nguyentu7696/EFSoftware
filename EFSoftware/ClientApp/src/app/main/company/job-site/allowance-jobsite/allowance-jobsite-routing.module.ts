import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllowanceJobsiteListComponent } from './allowance-jobsite-list/allowance-jobsite-list.component';
import { AllowanceJobsiteCreateComponent } from './allowance-jobsite-create/allowance-jobsite-create.component';
import { AllowanceJobsiteEditComponent } from './allowance-jobsite-edit/allowance-jobsite-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: AllowanceJobsiteListComponent
  },
  {
    path: 'create',
    component: AllowanceJobsiteCreateComponent
  },
  {
    path: 'edit/:id',
    component: AllowanceJobsiteEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllowanceJobsiteRoutingModule { }
