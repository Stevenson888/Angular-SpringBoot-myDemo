import {Component } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {

  public msg:string="我是子组件child2的一个msg";

  constructor() { }

  ngOnInit() {
  }

  run(){
    alert('我是子组件child2的run方法');
  }

}
