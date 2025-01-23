import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() customImg:string=''
  @HostListener('error') handleError():void{
    console.log('esta imagen ')
    const elementoNativo=this.elHost.nativeElement
    elementoNativo.src=this.customImg
  }

  constructor(private elHost : ElementRef) { }

}
