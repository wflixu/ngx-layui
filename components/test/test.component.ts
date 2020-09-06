import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component(
  selector: 'la-test',
  templateUrl: './test.less
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
