import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(public router:Router) { }

  ngOnInit() {
  }

  //1.无参数
  goHome(){
    this.router.navigate(['/home']);
  }

  //2.有参数-常数参数
  goProductRecord(){
    console.log("goProductRecord()")
    //路由跳转   普通路由和动态路由
    this.router.navigate(['/productrecord/','1234'])
  }

  //3.有参数-对象参数
  goProductRecord2(){
    console.log("goProductRecord2()")
    //跳转并进行get传值
    let queryParams={
      queryParams:{'aid':123}
    }
    this.router.navigate(['/productrecord'], queryParams);
  }

  //4.有参数-对象参数  navigationExtras - 同3
  goProductRecord3(){
    console.log("goProductRecord3()")
    //跳转并进行get传值
    let navigationExtras: NavigationExtras={
      queryParams:{'aid':123},
      fragment: 'anchor'
    }
    this.router.navigate(['/productrecord'], navigationExtras);
  }

}
