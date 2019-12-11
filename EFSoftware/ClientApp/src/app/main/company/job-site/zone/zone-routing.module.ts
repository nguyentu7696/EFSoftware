import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoneListComponent } from './zone-list/zone-list.component';
import { ZoneCreateComponent } from './zone-create/zone-create.component';
import { ZoneEditComponent } from './zone-edit/zone-edit.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ZoneListComponent
  },
  {
    path: 'create',
    component: ZoneCreateComponent
  },
  {
    path: 'edit/:id',
    component: ZoneEditComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoneRoutingModule { }
