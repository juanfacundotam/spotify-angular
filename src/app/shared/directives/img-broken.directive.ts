import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {

  constructor(private elHost: ElementRef) {
    console.log(elHost)
   }

}
