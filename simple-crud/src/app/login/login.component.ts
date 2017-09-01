import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { User } from "../../User";
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User[];
  name: string;
  email: string;

  constructor(private __userService: UserService, private router: Router) { }

  loginUser() {

    var userLogin = {
      name: this.name,
      email: this.email
    }

    this.__userService.loginUser(userLogin).subscribe(data => {
      if (data == null) {
        console.log('Theres something wrong');
      } else {
        this.router.navigateByUrl('/home');
        localStorage.setItem("userLogged", JSON.stringify(data));
        window.location.reload();
      }
    });
  }
  
}

