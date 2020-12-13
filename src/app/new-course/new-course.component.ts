import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  oForm: FormGroup;

  constructor() {

    this.oForm = new FormGroup({
      topics: new FormArray([])
    })
  }

  addTopic(topic: HTMLInputElement){
    (this.topics as FormArray).push( new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){

    return (this.oForm.get('topics') as FormArray);
  }

  ngOnInit(): void {
  }

}
