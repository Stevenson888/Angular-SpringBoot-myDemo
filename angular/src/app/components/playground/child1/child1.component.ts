import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {

  //接受父组件传来的数据
  @Input() title:any;

  @Input() msg:any;

  @Input() run:any;

  @Input() parent:any;


  constructor() { }

  ngOnInit() {
  }

  getParentMsg(){

    //获取父组件的数据
    alert(this.msg);
  }

  getParentRun(){

    //执行父组件的run 方法
    // this.run();

    alert(this.parent.msg);

    this.parent.run();
  }

}
