import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RequestService }from './services/request.service';

import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/user/users/users.component';
import { RolesComponent } from './pages/user/roles/roles.component';
import { PersonComponent } from './pages/person/person.component';
import { AccountComponent } from './pages/person/account/account.component';
import { PasswordComponent } from './pages/person/password/password.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RasideComponent } from './layout/raside/raside.component';
import { LasideComponent } from './layout/laside/laside.component';
import { LifecycleComponent } from './components/playground/lifecycle/lifecycle.component';
import { ParentComponent } from './components/playground/parent/parent.component';
import { Child1Component } from './components/playground/child1/child1.component';
import { Child2Component } from './components/playground/child2/child2.component';
import { Child3Component } from './components/playground/child3/child3.component';
import { LoginComponent } from './pages/login/login.component';
import { NewslistComponent } from './components/playground/newslist/newslist.component';
import { NewsrecordComponent } from './components/playground/newsrecord/newsrecord.component';
import { ProductrecordComponent } from './components/playground/productrecord/productrecord.component';
import { ProductComponent } from './components/playground/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UsersComponent,
    RolesComponent,
    PersonComponent,
    AccountComponent,
    PasswordComponent,
    PlaygroundComponent,
    FooterComponent,
    HeaderComponent,
    RasideComponent,
    LasideComponent,
    LifecycleComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    LoginComponent,
    NewslistComponent,
    NewsrecordComponent,
    ProductrecordComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
