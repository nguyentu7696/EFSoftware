import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteCreateComponent } from './site-create/site-create.component';
import { SiteEditComponent } from './site-edit/site-edit.component';
import { DataStorage } from '../../../providers/data/data';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: SiteListComponent
      },
      {
        path: 'create',
        component: SiteCreateComponent
      },
      {
        path: 'edit/:id',
        component: SiteEditComponent
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [DataStorage],
})
export class SiteRoutingModule { }
