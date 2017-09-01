import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {

  constructor(private http: Http) {
    console.log('Service started')
  }

  getUsers() {
    return this.http.get('api/users')
      .map(res => res.json());
  }

  addNewUser(user) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/user', JSON.stringify(user), { headers: headers })
      .map(res => res.json());
  }

  deleteUser(id) {
    return this.http.delete('/api/user/' + id)
      .map(res => res.json);
  }

  updateUser(user) {
    console.log(' We are updating ' + user);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('/api/user/' + user._id, JSON.stringify(user), { headers: headers })
      .map(res => res.json());
  }

  loginUser(user) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/login', JSON.stringify(user), { headers: headers })
      .map(res => res.json());
  }

}

