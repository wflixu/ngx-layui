import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBaseComponent } from './alert-base.component';
import { AlertRoutingModule } from './alert-routing.module';
import { LaAlertModule } from 'ng-lay';

@NgModule({
  declarations: [AlertBaseComponent],
  imports: [
    CommonModule,
    LaAlertModule,
    AlertRoutingModule
  ]
})
export class AlertTestModule { }
