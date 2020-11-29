import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h2>{{teste}}</h2>
    <ul>
      <li *ngFor="let course of courses">{{course}}</li>
    </ul>
  `
})
export class CoursesComponent {

  teste = 'Lista de Cursos';
  courses: string[];

  constructor(coursesService: CoursesService){
    this.courses = coursesService.getCourses();
  }
}
