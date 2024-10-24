import { Component } from '@angular/core';

// import { RequestService }from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
  // public title:string="首页组件parent的title";

  // public list:any[]=[];
  // constructor(public request:RequestService){}
  // ngOnInit(){
  //   console.log("111111");
  //   var api='/user/getList';
  //   this.request.get(api).then((response:any)=>{
  //     console.log("response", response);
  //     this.list=response.result;
  //   })
  // }

}
