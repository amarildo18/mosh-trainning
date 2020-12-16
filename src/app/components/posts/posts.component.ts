import { PostService } from './../../services/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;


  constructor(private postService: PostService) {

  }

  createPost(input: HTMLInputElement){
    let post = {
      title: input.value
    }

    this.postService.createPost(post)
      .subscribe(response => {
        post['id'] = response['id'];
        this.posts.splice(0,0,post);
        input.value = '';
      })
  }

  updatePost(post:any){

    this.postService.updatePost(post)
      .subscribe(response => {
        console.log(response);
      })
  }

  deletePost(post:any){
    this.postService.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    })
  }

  ngOnInit(): void {
    this.postService.getPost()
    .subscribe(
      response => {
        this.posts = response;
        console.log(response);
      }
    )
  }

}
