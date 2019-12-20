import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordianComponent } from './accordian.component';

const routes: Routes = [{ path: '', component: AccordianComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccordianRoutingModule { }
