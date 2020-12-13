import { UsernameValidators } from './username.validator';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  oForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace,
    ], UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  })

  login(){

    this.oForm.setErrors({
      logiError: true
    })
  }

  get username(){
    return this.oForm.get('username');
  }

  get password(){
    return this.oForm.get('password');
  }
}
