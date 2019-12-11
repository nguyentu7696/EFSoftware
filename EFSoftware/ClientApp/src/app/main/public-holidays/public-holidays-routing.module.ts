import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicHolidayListComponent} from './public-holiday-list/public-holiday-list.component';
import { PublicHolidayCreateComponent } from './public-holiday-create/public-holiday-create.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: PublicHolidayListComponent
  },
  {
    path: 'createupdate',
    component: PublicHolidayCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicHolidaysRoutingModule { }
