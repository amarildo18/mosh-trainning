import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input() title: string;
  isExpanded: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isExpanded = !this.isExpanded;
  }

}
