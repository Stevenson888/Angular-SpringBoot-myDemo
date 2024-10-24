import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  public title:string="首页组件parent的title";
  public msg:string="我是父组件parent的msg";

  @ViewChild('child2') child2:any;

  constructor() { }

  ngOnInit() {
  }

  run(){
    alert('我是父组件parent的run()方法');
  }


  getChildMsg(){
    //获取child2子组件的数据
    alert(this.child2.msg);
  }
  getChildRun(){
    this.child2.run();
  }


  runInChild3(e:any){
    console.log(e);   //e:子组件给父组件广播的数据
    alert('我是父组件Parent的runInchild3()方法');
    alert('子组件给父组件广播的数据e: '+e)
  }

}
