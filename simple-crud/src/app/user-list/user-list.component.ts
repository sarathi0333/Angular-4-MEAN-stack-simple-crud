import { Component } from '@angular/core';
import { User } from '../../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: User[];
  constructor(private __userService: UserService) {
    this.__userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(id) {
    var users = this.users;
    this.__userService.deleteUser(id).subscribe(data => {
      for (var i = 0; i < users.length; i++) {
        if (users[i]._id == id) {
          users.splice(i, 1)
        }
      }
    });
  };

  showData = true;
  idUser = 0;

  editUser(id) {
    this.showData = true;
    this.idUser = id;
  }

  cancel() {
    this.idUser = 0;
  }

  saveUser(user) {
    var newUser = {
      _id: user._id,
      name: user.name,
      email: user.email
    }

    this.__userService.updateUser(newUser).subscribe(data => {
      this.showData = true;
      this.idUser = 0;
      console.log('User ' + newUser.name, 'updated');
    });
  }

  getThisClick(id, user) {
    if (id !== user) {
      return true;
    }
  }

  getThisClick2(id, user) {
    if (id !== user) {
      return false;
    } else {
      return true;
    }
  }

}
