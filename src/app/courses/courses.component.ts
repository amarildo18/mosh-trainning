import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <button class='btn btn-primary' [style.color]="isActive ? 'red' : 'white'">save</button>
  `
})
export class CoursesComponent {

  isActive = true;
}
