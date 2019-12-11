import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicListComponent } from './basic-list/basic-list.component';
import { BasicCreateComponent } from './basic-create/basic-create.component';
import { DataStorage } from '../../../providers/data/data';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: BasicListComponent
  },
  {
    path: 'create',
    component: BasicCreateComponent
  },
  {
    path: 'update',
    component: BasicCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[DataStorage],
})
export class BasicRoutingModule { }
