import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <button class='btn btn-primary' [class.active]="isActive">save</button>
  `
})
export class CoursesComponent {

  isActive = false;
}
