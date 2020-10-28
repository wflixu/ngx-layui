import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {LaOutletModule } from 'ng-lay/core/'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaAlertModule } from 'ng-lay/alert';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LaAlertModule,
    LaOutletModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
