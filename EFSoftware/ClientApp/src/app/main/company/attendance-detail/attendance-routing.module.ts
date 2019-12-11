import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceCreateComponent } from './attendance-create/attendance-create.component';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: AttendanceListComponent
  },
  {
    path: 'create',
    component: AttendanceCreateComponent
  },
  {
    path: 'edit/:id',
    component: AttendanceEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
