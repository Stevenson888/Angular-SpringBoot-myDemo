import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component {

  @Output() private outer = new EventEmitter();

  public msg="我是子组件child3的一个msg";

  constructor() { }

  ngOnInit() {
  }

  sendToParent(){
    this.outer.emit('我是子组件child3的数据');
  }

}
