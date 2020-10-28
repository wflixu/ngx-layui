import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaButtonComponent } from './button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LaButtonComponent
  ],
  exports: [LaButtonComponent]
})
export class ButtonModule { }


