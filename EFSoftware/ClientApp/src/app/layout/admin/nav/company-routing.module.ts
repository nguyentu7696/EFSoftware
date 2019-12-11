import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyComponent} from './company.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      {
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full'
      },
      {
        path: 'basic',
        loadChildren: '../../../main/company/basic/basic.module#BasicModule'
      },
      {
        path: 'department',
        loadChildren: '../../../main/company/department/department.module#DepartmentModule'
      },
      {
        path: 'job-site',
        loadChildren: '../../../main/company/job-site/jobsite.module#JobSiteModule'
      },
      {
        path: 'attendance',
        loadChildren: '../../../main/company/attendance-detail/attendance.module#AttendanceModule'
      },
      {
        path: 'site',
        loadChildren: '../../../main/company/site/site.module#SiteModule'
      },
      {
        path: 'resign-reason',
        loadChildren: '../../../main/company/resign-reason/resign.module#ResignModule'
      },
      {
        path: 'public-holiday',
        loadChildren: '../../../main/company/public-holiday/public-holiday.module#PublicHolidayModule'
      },
      {
        path: 'race',
        loadChildren: '../../../main/company/race/race.module#RaceModule'
      },
      // {
      //   path: 'employee',
      //   loadChildren: '../../../main/company/employee/employee.module#EmployeeModule'
      // },
      {
        path: 'otcode',
        loadChildren: '../../../main/company/otcode/otcode.module#OtcodeModule'
      },
      {
        path: 'allowance',
        loadChildren: '../../../main/company/allowance/allowance.module#AllowanceModule'
      },
      {
        path: 'shift',
        loadChildren: '../../../main/company/shift/shift.module#shiftModule'
      },
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
