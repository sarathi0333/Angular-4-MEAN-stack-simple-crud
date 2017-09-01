import { Component } from '@angular/core';
import { User } from "../../User";
import {HomeService} from "../home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  __user: User
  user: {};
  posts = [];

  constructor(private __homeService: HomeService) {
    var user = localStorage.getItem("userLogged");
    this.__user = JSON.parse(user);
    this.user = this.__user;

    this.__homeService.getPosts().subscribe(data => {
        this.posts = data;
    });
  }

  content: string;

  createPost(user) {
    var newPost = {
      content: this.content,
      user: user
    }

    this.__homeService.createPost(newPost).subscribe(data => {
      this.posts.push(data);
      console.log('post created', data);
    });
  }
}
