import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-productrecord',
  templateUrl: './productrecord.component.html',
  styleUrls: ['./productrecord.component.scss']
})
export class ProductrecordComponent {
  constructor(public route:ActivatedRoute) { }

  ngOnInit() {

    // console.log(this.route.queryParams);
    this.route.queryParams.subscribe((data)=>{
      console.log('this.route.queryParams: ' , data);
    })

    // this.route.params.subscribe((data)=>{
    //   console.log('this.route.params: ' , data);
    // })

  }

}
