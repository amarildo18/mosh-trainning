import { BadRequestError } from './../commom/bad-request-error';
import { NotFoundError } from './../commom/not-found-error';
import { AppError } from './../commom/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  //url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private url: string, private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url)
      .pipe(
        map(response => response ),
        catchError(this.handleError)
      )
  }

  create(resource){
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource){

    return this.http.patch(this.url + '/'+resource.id, JSON.stringify({isRead: true}))
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id){
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
