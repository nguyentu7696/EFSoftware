
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicRoutingModule } from './basic-routing.module';
import { BasicListComponent} from './basic-list/basic-list.component';
import { BasicCreateComponent } from './basic-create/basic-create.component';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../libs/notification';
import { BasicService } from './basic.service';
import { ToastyModule } from 'ng2-toasty';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    BasicRoutingModule,
    FormsModule,
    ToastyModule,
    NgbModule
  ],
  declarations: [
    BasicListComponent,
    BasicCreateComponent
  ],
  providers: [BasicService, NotificationService],
})
export class BasicModule { }

