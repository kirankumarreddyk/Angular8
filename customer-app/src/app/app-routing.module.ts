import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'scroll', loadChildren: () => import('./scroll/scroll.module').then(m => m.ScrollModule) },
  { path: 'xldownload', loadChildren: () => import('./xldownload/xldownload.module').then(m => m.XldownloadModule) },
  { path: 'accordian', loadChildren: () => import('./accordian/accordian.module').then(m => m.AccordianModule) },
  { path: 'accordian1', loadChildren: () => import('./accordian1/accordian1.module').then(m => m.Accordian1Module) },
  { path: 'accordian2', loadChildren: () => import('./accordian2/accordian2.module').then(m => m.Accordian2Module) },
  { path: 'commonmenu', loadChildren: () => import('./commonmenu/commonmenu.module').then(m => m.CommonmenuModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
