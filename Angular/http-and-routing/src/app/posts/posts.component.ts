import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any = [];

  constructor(private service: CrudService) {
    this.service.getPosts().subscribe((response) => {
      this.posts = response;
    });
    console.log(this.posts);
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.service.createPost(post).subscribe((response: any) => {
      post.id = response.id;
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post: any) {
    this.service.updatePost(post).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  deletePost(post: any) {
    this.service.deletePost(post.id).subscribe((response) => {
      let index: number = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

  ngOnInit(): void {}
}
