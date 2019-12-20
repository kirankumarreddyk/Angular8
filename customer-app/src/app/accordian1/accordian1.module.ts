import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Accordian1RoutingModule } from './accordian1-routing.module';
import { Accordian1Component } from './accordian1.component';
import { AccordionModule } from 'ngx-bootstrap'; 

@NgModule({
  declarations: [Accordian1Component],
  imports: [
    CommonModule,
    Accordian1RoutingModule,
    AccordionModule
  ]
})
export class Accordian1Module { }
