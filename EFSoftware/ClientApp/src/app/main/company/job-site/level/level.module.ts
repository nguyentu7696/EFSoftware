import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastyModule } from 'ng2-toasty';
import {SharedModule} from '../../../share.module';
import {NotificationService} from '../../../../libs/notification';
import { LevelService } from './level.service';
import { LevelRoutingModule } from './level-routing.module';
import { LevelListComponent } from './level-list/level-list.component';
import { LevelCreateComponent } from './level-create/level-create.component';
import { LevelEditComponent } from './level-edit/level-edit.component';

@NgModule({
  imports: [
    CommonModule,
    LevelRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastyModule,
    SharedModule
  ],
  declarations: [LevelListComponent, LevelCreateComponent, LevelEditComponent],
  providers: [LevelService, NotificationService],
})
export class LevelModule { }
