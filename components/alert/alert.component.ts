import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'la-alert',
  templateUrl: './alert.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LaAlertComponent implements OnInit {
  /**
   * alertt 文本内容
   */
  @Input() label:string;

  constructor() { }

  ngOnInit(): void {
  }

}
