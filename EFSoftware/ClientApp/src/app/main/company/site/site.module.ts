import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteCreateComponent } from './site-create/site-create.component';
import { SiteRoutingModule } from './site-routing.module';
import { ToastyModule } from 'ng2-toasty';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SiteService } from './site.service';
import { NotificationService } from '../../../libs/notification';
import { SiteEditComponent } from './site-edit/site-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule,
    FormsModule,
    ToastyModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    SiteListComponent,
    SiteCreateComponent,
    SiteEditComponent
  ],
  providers: [SiteService, NotificationService]
})
export class SiteModule { }
