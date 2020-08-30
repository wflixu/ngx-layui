


import { NgModule } from '@angular/core';


import { LaAlertModule } from 'ng-lay/alert';


export * from 'ng-lay/alert';

@NgModule({
  exports: [
    LaAlertModule,
  ],
  declarations: []
})
/**
 * @deprecated Use secondary entry eg: `import { NzButtonModule } from 'ng-lay/button'`.
 */
export class NgLayModule {
  constructor() {
  }
}
