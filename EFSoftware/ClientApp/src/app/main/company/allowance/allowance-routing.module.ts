import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllowanceEditComponent } from './allowance-edit/allowance-edit.component';
import { AllowanceCreateComponent } from './allowance-create/allowance-create.component';
import { AllowanceListComponent } from './allowance-list/allowance-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: AllowanceListComponent
  },
  {
    path: 'create',
    component: AllowanceCreateComponent
  },
  {
    path: 'edit/:id',
    component: AllowanceEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllowanceRoutingModule { }
