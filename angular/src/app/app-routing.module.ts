import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/user/users/users.component';
import { RolesComponent } from './pages/user/roles/roles.component';
import { PersonComponent } from './pages/person/person.component';
import { AccountComponent } from './pages/person/account/account.component';
import { PasswordComponent } from './pages/person/password/password.component';
import { ParentComponent } from './components/playground/parent/parent.component';
import { Child1Component } from './components/playground/child1/child1.component';
import { Child2Component } from './components/playground/child2/child2.component';
import { Child3Component } from './components/playground/child3/child3.component';
import { LifecycleComponent } from './components/playground/lifecycle/lifecycle.component';
import { NewslistComponent } from './components/playground/newslist/newslist.component';
import { NewsrecordComponent } from './components/playground/newsrecord/newsrecord.component';
import { ProductComponent } from './components/playground/product/product.component';
import { ProductrecordComponent } from './components/playground/productrecord/productrecord.component';

import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path:'home',component:HomeComponent,
  },
  {
    path:'user',component:UserComponent,
    children:[
      {path:'users',component:UsersComponent},
      {path:'roles',component:RolesComponent},
      {path:'**',redirectTo:'user'}
    ]
  },
  {
    path:'person',component:PersonComponent,
    children:[
      {path:'account',component:AccountComponent},
      {path:'password',component:PasswordComponent},
      {path:'**',redirectTo:'person'}
    ]
  },
  {    path:'parent',component:ParentComponent  },
  {    path:'child1',component:Child1Component  },
  {    path:'child2',component:Child2Component  },
  {    path:'child3',component:Child3Component  },
  {    path:'lifecycle',component:LifecycleComponent  },
  {    path:'newslist',component:NewslistComponent  },
  {    path:'newsrecord',component:NewsrecordComponent  },
  {    path:'newsrecord/:aid',component:NewsrecordComponent  },
  {    path:'product',component:ProductComponent  },
  {    path:'productrecord',component:ProductrecordComponent  },
  {    path:'productrecord/:aid',component:ProductrecordComponent  },

  {    path:'login',component:LoginComponent  },
  {    path:'**',   redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
