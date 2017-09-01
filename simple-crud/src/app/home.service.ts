import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: Http) {
    console.log('Home service started')
  }

  createPost(post) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/post/post', JSON.stringify(post), { headers: headers })
      .map(res => res.json());
  }

  getPosts() {
    return this.http.get('post/posts')
      .map(res => res.json());
  }

}
