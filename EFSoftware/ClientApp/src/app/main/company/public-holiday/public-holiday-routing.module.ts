import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicHolidayListComponent} from './public-holiday-list/public-holiday-list.component';
import { PublicHolidayCreateComponent } from './public-holiday-create/public-holiday-create.component';
import { PublicHolidayEditComponent } from './public-holiday-edit/public-holiday-edit.component';

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
    path: 'create',
    component: PublicHolidayCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicHolidayRoutingModule { }
