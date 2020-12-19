import { BadRequestError } from './../../commom/bad-request-error';
import { NotFoundError } from './../../commom/not-found-error';
import { AppError } from './../../commom/app-error';
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

    this.postService.create(post)
      .subscribe(response => {
        post['id'] = response['id'];
        this.posts.splice(0,0,post);
        input.value = '';
      },
      (error: AppError) => {
        if(error instanceof BadRequestError){
          // this.form.setErrors( error.originalError);
        }
        else{
          throw error;
        }

      })
  }

  updatePost(post:any){

    this.postService.update(post)
      .subscribe(response => {
        console.log(response);
      }
    )
  }

  deletePost(post:any){
    this.postService.delete(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    },
    (error: AppError) => {
      if(error instanceof NotFoundError){
        alert('Este post já foi removido');
      }
      else throw error;
    }
    )
  }

  ngOnInit(): void {
    this.postService.getAll()
    .subscribe(
      response => {
        this.posts = response;
        console.log(response);
      },
      // error => {
      //   alert('Um erro inesperado aconteceu');
      //   console.log(error);
      // }
    )
  }

}
