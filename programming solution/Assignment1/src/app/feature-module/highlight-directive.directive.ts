import { Directive, ElementRef, HostListener } from '@angular/core';

//Submitted by :
//Emp# 20057596
//Ph# +91 9627200616


//1.	Create a project using angular-cli
//Add one more module into the project, say FeatureModule. This module which you are adding 
//should be generated using ng command. Add one directive called HighlightDirective to 
//FeatureModule. This directive has to be generated using ng command. Use the directive of the 
//FeatureModule in AppModule. If you use this directive for a para, background color of the para 
//should become blue when mouseenter event occurs on the para element and no background color when 
//mouseleave event occurs.

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlightdirective('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlightdirective(null);
  }

  private highlightdirective(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
