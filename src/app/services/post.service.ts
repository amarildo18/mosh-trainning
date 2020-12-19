import { BadRequestError } from './../commom/bad-request-error';
import { NotFoundError } from './../commom/not-found-error';
import { AppError } from './../commom/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost(){
    return this.http.get(this.url)
      .pipe(
        catchError(this.handleError)
      )
  }

  createPost(post){
    return this.http.post(this.url, JSON.stringify(post))
      .pipe(
        catchError(this.handleError)
      );
  }

  updatePost(post){

    return this.http.patch(this.url + '/'+post.id, JSON.stringify({isRead: true}))
      .pipe(
        catchError(this.handleError)
      );
  }

  deletePost(id){
    return this.http.delete(this.url+'/'+id)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: Response){

    if(error.status === 400 )
      return Observable.throw( new BadRequestError(error.json()));

    if(error.status === 404)
      return Observable.throw( new NotFoundError());

    return Observable.throw(new AppError(error.json()))
  }
}
