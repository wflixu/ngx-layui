import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  text: string | TemplateRef<any> ="sdkfajkl akjsdkfj  string" ;
  @ViewChild('textTemp') textTemplate :TemplateRef<any>;

  constructor() { }
  public count:number =  0
  ngOnInit(): void {

  }

  onClick():void {
    this.count++ ;

    if(this.count%3 === 0){
      this.text = 'test string hahah';
    }else if(this.count%3 === 1){
      this.text = this.textTemplate;
    }else {
      this.text = null;
    }
  }

}
