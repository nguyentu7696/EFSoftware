import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  exports: [
    NgbModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: []
})
export class SharedModule { }
