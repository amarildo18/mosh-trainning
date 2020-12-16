import { AbstractControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  oForm: FormGroup;
  constructor(private fb: FormBuilder) {

    this.oForm = this.fb.group({
      oldPassword: ['',Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get oldPassword(): AbstractControl{
    return this.oForm.get('oldPassword');
  }

  get newPassword(): AbstractControl{
    return this.oForm.get('newPassword');
  }

  get confirmPassword(): AbstractControl{
    return this.oForm.get('confirmPassword');
  }

}
