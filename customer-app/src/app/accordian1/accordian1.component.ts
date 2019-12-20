import { Component, OnInit } from '@angular/core';
import { AccordionConfig } from 'ngx-bootstrap/accordion'; // npm install ngx-bootstrap --save
export function getAccordionConfig(): AccordionConfig {
  return Object.assign(new AccordionConfig(), { closeOthers: true });
};
@Component({
  selector: 'app-accordian1',
  templateUrl: './accordian1.component.html',
  styleUrls: ['./accordian1.component.css'],
  providers: [{ provide: AccordionConfig, useFactory: getAccordionConfig }]
})
export class Accordian1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



// https://valor-software.com/ngx-bootstrap/#/documentation#getting-started