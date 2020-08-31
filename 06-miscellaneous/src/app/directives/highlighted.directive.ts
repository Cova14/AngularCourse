import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(private el: ElementRef) {
    console.log('Directiva llamada')
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input("appHighlighted") newColor:string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.newColor)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null)
  }

  private highlight (color: string = 'yellow') {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
