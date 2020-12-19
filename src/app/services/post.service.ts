import { DataService } from './data.service';
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
export class PostService extends DataService{

  //url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

}
