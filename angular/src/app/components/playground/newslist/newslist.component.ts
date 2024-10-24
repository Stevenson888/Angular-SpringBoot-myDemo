import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.scss']
})
export class NewslistComponent {
  public list:any[]=[];

  constructor( private router: Router) {  }

  ngOnInit() {
    for(var i=0;i<10;i++){
      this.list.push('这是第'+i+'条数据');
    }
  }
}
