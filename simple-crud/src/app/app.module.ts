import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

//Routing
const appRoutes: Routes = [
  { path: 'form', component: UserComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'login-user', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    LoginComponent,
    HomeComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
