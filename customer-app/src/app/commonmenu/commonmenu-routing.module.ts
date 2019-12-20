import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonmenuComponent } from './commonmenu.component';

const routes: Routes = [{ path: '', component: CommonmenuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonmenuRoutingModule { }
