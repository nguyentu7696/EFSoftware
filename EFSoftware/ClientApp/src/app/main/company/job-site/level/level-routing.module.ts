import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelListComponent } from './level-list/level-list.component';
import { LevelCreateComponent } from './level-create/level-create.component';
import { LevelEditComponent } from './level-edit/level-edit.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: LevelListComponent
  },
  {
    path: 'create',
    component: LevelCreateComponent
  },
  {
    path: 'edit/:id',
    component: LevelEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelRoutingModule { }
