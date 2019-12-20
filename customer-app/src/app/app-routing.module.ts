import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'scroll', loadChildren: () => import('./scroll/scroll.module').then(m => m.ScrollModule) },
  { path: 'xldownload', loadChildren: () => import('./xldownload/xldownload.module').then(m => m.XldownloadModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
