import { AppErrorHandler } from './commom/app-error-handler';
import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses/courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './components/posts/posts.component';

import {HttpClient, HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    BootstrapPanelComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseComponent,
    ChangePasswordComponent,
    PostsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    CoursesService,
    AuthorsService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
