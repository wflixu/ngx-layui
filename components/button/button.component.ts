import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[la-button]',
  encapsulation: ViewEncapsulation.None,
  template: `
  <ng-content></ng-content>
`,
  styleUrls: ['./button.component.less'],
  host: {
    '[class.la-btn]': `true`,
    '[class.la-btn-primary]': `laType === 'primary'`,
    '[class.la-btn-default]': `laType === 'default'`,
    '[class.la-btn-normal]': `laType === 'normal'`,
    '[class.la-btn-warn]': `laType === 'warn'`,
    '[class.la-btn-error]': `laType === 'error'`,
    '[class.la-btn-lg]': `laSize === 'large'`,
    '[class.la-btn-sm]': `laSize === 'small'`,
    '[attr.tabindex]': 'disabled ? -1 : (tabIndex === null ? null : tabIndex)',
    '[attr.disabled]': 'disabled || null'
  }
})
export class LaButtonComponent implements OnInit {

  @Input() laType: 'primary'|'normal'| 'warn'| 'error'|'default' = 'default'
  @Input() laSize: 'large'| 'small'| 'default' = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
