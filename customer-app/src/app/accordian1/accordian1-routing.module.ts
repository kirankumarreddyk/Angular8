import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Accordian1Component } from './accordian1.component';

const routes: Routes = [{ path: '', component: Accordian1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Accordian1RoutingModule { }
