import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XldownloadRoutingModule } from './xldownload-routing.module';
import { XldownloadComponent } from './xldownload.component';
import { ExcelService } from '../xldownload/xldownload.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [XldownloadComponent],
  imports: [
    CommonModule,
    XldownloadRoutingModule
  ],
  providers: [ExcelService]
})
export class XldownloadModule { }
