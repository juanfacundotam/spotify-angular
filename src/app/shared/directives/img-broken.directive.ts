import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]',
  standalone: true
})
export class ImgBrokenDirective {
  // @Input() customImg: string = '' // podriamos hacer esto para pasarle por props al img del html
@HostListener('error') handleError(): void {
  const elNative =  this.elHost.nativeElement
  console.log('Esta imagen es inexistente', this.elHost)
 elNative.src = './assets/noImage.png'
//  elNative.src = this.customImg // y asi pasar distintas img segun sea el caso
}
  constructor(private elHost: ElementRef) {
    // console.log(elHost)
   }

}
