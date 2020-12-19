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
      },
      (error: Response) => {
        if(error.status === 400){
          // this.form.setErrors( error.json());
        }
        else{
          alert('Um erro inesperado aconteceu');
          console.log(error);
        }

      })
  }

  updatePost(post:any){

    this.postService.updatePost(post)
      .subscribe(response => {
        console.log(response);
      },
      error => {
        alert('Um erro inesperado aconteceu');
        console.log(error);
      })
  }

  deletePost(post:any){
    this.postService.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    },
    (error: Response) => {
      if(error.status === 404){
        alert('Este post já foi removido');
      }
      else{
        alert('Um erro inesperado aconteceu');
        console.log(error);
      }
    }
    )
  }

  ngOnInit(): void {
    this.postService.getPost()
    .subscribe(
      response => {
        this.posts = response;
        console.log(response);
      },
      error => {
        alert('Um erro inesperado aconteceu');
        console.log(error);
      }
    )
  }

}
