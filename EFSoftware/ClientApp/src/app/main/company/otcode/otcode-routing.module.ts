import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtcodeListComponent } from './otcode-list/otcode-list.component';
import { OtcodeCreateComponent } from './otcode-create/otcode-create.component';
import { OtcodeEditComponent } from './otcode-edit/otcode-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: OtcodeListComponent
  },
  {
    path: 'create',
    component: OtcodeCreateComponent
  },
  {
    path: 'edit/:id',
    component: OtcodeEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtcodeRoutingModule { }
