import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaListComponent } from './area-list/area-list.component';
import { AreaCreateComponent } from './area-create/area-create.component';
import { AreaEditComponent } from './area-edit/area-edit.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: AreaListComponent
  },
  {
    path: 'create',
    component: AreaCreateComponent
  },
  {
    path: 'edit/:id',
    component: AreaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }
