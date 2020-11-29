import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <input type='text' (keyup.enter)="onkeyup()">
    <button class='btn btn-primary' (click)="onClick($event)">save</button>
  `
})
export class CoursesComponent {

  isActive = true;

  onkeyup(){
    console.log('ENTER was clicked...');
  }

  onClick(event){
    console.log('Event: ', event);
  }
}
