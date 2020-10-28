import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LaStringTemplateOutletDirective } from './string_template_outlet.directive';

@NgModule({
  imports: [CommonModule],
  exports: [LaStringTemplateOutletDirective],
  declarations: [LaStringTemplateOutletDirective]
})
export class LaOutletModule {}
