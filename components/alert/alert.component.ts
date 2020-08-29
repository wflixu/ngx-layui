import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'la-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
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
