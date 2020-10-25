import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  TemplateRef,
  ContentChild,
   AfterContentChecked, AfterViewInit
} from '@angular/core';

@Component({
  selector: 'la-alert',
  templateUrl: './alert.component.html',

  encapsulation: ViewEncapsulation.None,
  host:{
    '[class.la-alert-success]':'type ==="success" ',
    '[class.la-alert-info]':'type ==="info" ',
    '[class.la-alert-error]':'type ==="error"',
    '[class.la-alert-warn]':'type ==="warn"',
  }
})
export class LaAlertComponent implements OnInit, AfterContentChecked, AfterViewInit {
  /**
   * alertt 文本内容
   */
  @Input() label: string = '';
  @Input() type: 'success'| 'info' | 'warn' | 'error' = 'success';

  @ContentChild(TemplateRef, { static: false }) labelTpl: TemplateRef<any>;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.labelTpl);


  }
  ngAfterContentChecked(): void {
     console.log(this.labelTpl);
  }
}
