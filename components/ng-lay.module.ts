
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-lay/blob/master/LICENSE
 */

import { NgModule } from '@angular/core';


import { LaAlertModule } from 'ng-lay/alert';

export * from 'ng-lay/alert';

@NgModule({
  exports: [
    LaAlertModule,
  ]
})
/**
 * @deprecated Use secondary entry eg: `import { NzButtonModule } from 'ng-lay/button'`.
 */
export class NgLayModule {
  constructor() {
  }
}
