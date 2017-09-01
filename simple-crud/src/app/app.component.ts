import { Component } from '@angular/core';
import { UserService } from './user.service';
import { HomeService } from './home.service';
import { User } from "../User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, HomeService]
})
export class AppComponent {

  displayLogin = true;
  displayLogout = false;
  displayAddNewUser = true;
  displayHome = false;
  displayInfo = true;

  __user: User
  user: {};

  constructor() {
    var user = localStorage.getItem("userLogged");
    if (user == null || user == '') {

      this.displayLogout = false;
      this.displayLogin = true;
      this.displayAddNewUser = true;
      this.displayHome = false;
      this.displayInfo = true;
    } else {
      this.displayLogout = true;
      this.displayLogin = false;
      this.displayAddNewUser = false;
      this.displayHome = true;
    }
  }

  logoutUser() {
    window.localStorage.removeItem("userLogged");
    window.location.reload();
  }


}
