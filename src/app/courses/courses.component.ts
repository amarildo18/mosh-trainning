import { SummaryPipe } from './../summary.pipe';
import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <p>{{text | summary: 500}}</p>

  `
})
export class CoursesComponent {

 text = `
 For more straightforward sizing in CSS, we switch the global box-sizing value from content-box to border-box. This ensures padding does not affect the final computed width of an element,
 but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following Lorem
 `;

}
