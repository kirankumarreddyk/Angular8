import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Accordian2RoutingModule } from './accordian2-routing.module';
import { Accordian2Component } from './accordian2.component';


@NgModule({
  declarations: [Accordian2Component],
  imports: [
    CommonModule,
    Accordian2RoutingModule
  ]
})
export class Accordian2Module { }
