import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {UserListComponent} from '../../main/user/user-list/user-list.component';
import {JobsiteComponent} from '../../main/jobsite/jobsite.component';
import { DashboardComponent } from '../../main/dashboard/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'company',
        loadChildren: './nav/company.module#CompanyModule'
      },
      {
        path: 'global',
        loadChildren: './nav/global-config/global.module#GlobalModule'
      },
      {
        path:'user',
        component: UserListComponent
      },
      {
        path:'jobsite',
        component: JobsiteComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  },
  

    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
