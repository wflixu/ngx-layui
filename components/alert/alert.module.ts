import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaAlertComponent } from './alert.component';



@NgModule({
  declarations: [LaAlertComponent],
  exports:[LaAlertComponent],
  imports: [
    CommonModule
  ]
})
export class LaAlertModule { }
