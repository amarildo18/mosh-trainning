import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService{

 // private url: string = 'http://api.github.com/users/mosh-hamedani/followers';

  constructor(http: HttpClient) {
    super('http://api.github.com/users/mosh-hamedani/followers', http);
  }
}
