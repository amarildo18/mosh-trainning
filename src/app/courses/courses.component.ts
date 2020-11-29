import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <input type='text' [(ngModel)]="email" (keyup.enter)="onkeyup()">
    <button class='btn btn-primary' (click)="onClick($event)">save</button>
  `
})
export class CoursesComponent {

  isActive = true;
  email = 'me@domain.com';

  onkeyup(){
    console.log('Valor: ', this.email);
  }

  onClick(){
    console.log('Email: ', this.email);
  }
}
