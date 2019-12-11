
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentListComponent} from './department-list/department-list.component';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../libs/notification';
import { DepartmentService } from './department.service';
import { ToastyModule } from 'ng2-toasty';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule,
    ToastyModule,
    NgbModule
  ],
  declarations: [
    DepartmentListComponent,
    DepartmentCreateComponent
  ],
  providers: [DepartmentService, NotificationService],
})
export class DepartmentModule { }

