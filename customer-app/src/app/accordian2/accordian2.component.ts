import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian2',
  templateUrl: './accordian2.component.html',
  styleUrls: ['./accordian2.component.css']
})
export class Accordian2Component implements OnInit {
  iscollapsed: boolean = true;

  constructor() { }
  togglecollapse(){
    this.iscollapsed = !this.iscollapsed;
  }
  ngOnInit() {
  }

}
