import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <p>{{course.title | uppercase}}</p>
    <p>{{course.rating | number: '1.2-2'}}</p>
    <p>{{course.students | number}}</p>
    <p>{{course.price | currency}}</p>
    <p>{{course.releaseDate | date}}</p>
  `
})
export class CoursesComponent {

  course = {
    title: 'The complete Angular course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

}
