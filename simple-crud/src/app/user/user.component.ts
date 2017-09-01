import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user: User[];
  name: string;
  email: string;

  constructor(private __userService: UserService) { }

  addNewUser() {
    var newUser = {
      name: this.name,
      email: this.email
    }

    this.__userService.addNewUser(newUser).subscribe(data => {
      console.log('user added' + newUser);
    });
  }

 }