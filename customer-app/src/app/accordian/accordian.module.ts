import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordianRoutingModule } from './accordian-routing.module';
import { AccordianComponent } from './accordian.component';
import { FormsModule } from '@angular/forms'
import { FilterPipe } from './../filter.pipe';
@NgModule({
  declarations: [
    AccordianComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    AccordianRoutingModule,
    FormsModule
  ]
})
export class AccordianModule { }
