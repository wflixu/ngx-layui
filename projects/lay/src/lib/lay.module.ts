import { NgModule } from '@angular/core';
import { LaAlertModule } from './la-alert/la-alert.module';

// export * from 'lib/alert';
@NgModule({
  exports: [LaAlertModule]
})
export class LayModule { }
