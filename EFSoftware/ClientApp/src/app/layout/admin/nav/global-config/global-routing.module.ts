import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GlobalComponent} from './global.component';

const routes: Routes = [
  {
    path: '',
    component: GlobalComponent,
    children: [
      {
        path: '',
        redirectTo: 'attendance',
        pathMatch: 'full'
      },
      {
        path: 'attendance',
        loadChildren: '../../../../main/attendances/attendances.module#AttendancesModule'
      },
      {
        path: 'holiday',
        loadChildren: '../../../../main/public-holidays/public-holidays.module#PublicHolidaysModule'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalRoutingModule { }
