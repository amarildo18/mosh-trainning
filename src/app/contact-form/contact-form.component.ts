import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    {id: 1, name: 'E-mail'},
    {id: 2, name: 'Phone'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  log(valor: any): void{
    console.log( valor );
  }

  sendForm(f): void{
    console.log(f.value);
  }

}
