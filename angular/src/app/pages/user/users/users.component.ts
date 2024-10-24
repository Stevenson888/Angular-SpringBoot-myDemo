import { Component } from '@angular/core';
import {RequestService} from "../../../services/request.service";
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
// import { HttpserviceService } from '../../services/httpservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public list:any[]=[];
  constructor(public request:RequestService, public http:HttpClient){}
  ngOnInit(){
    console.log("111111");
    var api='/user/getList';

    // // Way 1 - Promise 封装 HttpClient Request
    this.request.get(api).then((response:any)=>{
      console.log("response", response);
      this.list=response.data;
      console.log("this.list", this.list);
    })


    // // Way 2 - Observable 封装 HttpClient Request - subscribe
    // this.request.get(api).subscribe(response => {
    //   console.log("response", response);
    //   this.list=JSON.parse(JSON.stringify(response.data));
    //   console.log("this.list", this.list);
    // });

    // // Way 2 - Observable 封装 HttpClient Request - unsubscribe 1ms后取消订阅
    // var d = this.request.get(api).subscribe(response => {
    //   console.log("response", response);
    //   this.list=JSON.parse(JSON.stringify(response.data));
    //   console.log("this.list", this.list);
    // });
    // setTimeout(()=>{
    //   d.unsubscribe();  /*取消订阅*/
    //   console.log("unsubscribe in 1 ms");
    // },1)

    // // Way 3 - Promise 封装 Axios Request
    //   console.log('axios获取数据');
    //   this.request.axiosGet(api).then((response:any)=>{
    //     console.log("response",response)
    //     this.list=JSON.parse(JSON.stringify(response.data.data));
    //   })


  }
}
