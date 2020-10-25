import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-base',
  templateUrl: './alert-base.component.html',
})
export class AlertBaseComponent implements OnInit {

  label:string;

  constructor() { }

  ngOnInit(): void {
    this.label='这是label 的内容';
  }

}
