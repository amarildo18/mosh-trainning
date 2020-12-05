import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input() format: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('blur') onBlur(): void{

    const valor: string = this.elementRef.nativeElement.value;

    if (this.format === 'lowercase'){
      this.elementRef.nativeElement.value = valor.toLowerCase();
    } else{
      this.elementRef.nativeElement.value = valor.toUpperCase();
    }
  }

}
