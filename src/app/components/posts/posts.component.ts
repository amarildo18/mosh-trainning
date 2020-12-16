import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {

  }

  createPost(input: HTMLInputElement){
    let post = {
      title: input.value
    }

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response['id'];
        this.posts.splice(0,0,post);
        input.value = '';
      })
  }

  updatePost(post:any){

    this.http.patch(this.url + '/'+post.id, JSON.stringify({isRead: true}))
      .subscribe(response => {
        console.log(response);
      })
  }

  deletePost(post:any){
    this.http.delete(this.url+'/'+post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,30);
    })
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(
      response => {
        this.posts = response;
        console.log(response);
      }
    )
  }

}
