import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import bootstrap from "bootstrap";  //https://stackoverflow.com/questions/54706459/add-bootstrap-4-to-angular-6-or-angular-7-application
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonmenuComponent } from './commonmenu/commonmenu.component';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    CommonmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






