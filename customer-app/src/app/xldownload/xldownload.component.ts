import { Component, OnInit } from '@angular/core';
import { ExcelService } from './xldownload.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-xldownload',
  templateUrl: './xldownload.component.html',
  styleUrls: ['./xldownload.component.css']
})
export class XldownloadComponent implements OnInit {
  // name = 'Angular 6';
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  },
  {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  },
  {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }];
  constructor(private excelService:ExcelService) { }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }
  ngOnInit() {
  }

}
