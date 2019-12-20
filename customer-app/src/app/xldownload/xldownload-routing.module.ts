import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XldownloadComponent } from './xldownload.component';

const routes: Routes = [{ path: '', component: XldownloadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class XldownloadRoutingModule { }
