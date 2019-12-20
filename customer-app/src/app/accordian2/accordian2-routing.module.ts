import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Accordian2Component } from './accordian2.component';

const routes: Routes = [{ path: '', component: Accordian2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Accordian2RoutingModule { }
