import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CompanyComponent } from './company.component';
import { DataStorage } from '../../../providers/data/data';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    CompanyComponent
  ],
  providers: [
    DataStorage
  ]
})
export class CompanyModule { }
