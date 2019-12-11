import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalRoutingModule } from './global-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { GlobalComponent } from './global.component';
import { DataStorage } from '../../../../providers/data/data';
@NgModule({
  imports: [
    CommonModule,
    GlobalRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    GlobalComponent
  ],
  providers: [
    DataStorage
  ]
})
export class GlobalModule { }
