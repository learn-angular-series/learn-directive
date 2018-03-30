import { Directive, ElementRef,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[my-high-light]'
})
export class MyHighLightDirective {
  @Input() 
  highlightColor: string;

  // @HostBinding("style.border")
  // border:string;

  @HostBinding("class")
  myClass:string;

  constructor(private el: ElementRef) {
    console.log(el);
    el.nativeElement.style.backgroundColor = '#ff3300';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  // @HostListener('click') onClick() {
  //   if(this.myClass){
  //     this.myClass="";
  //   }else{
  //     this.myClass="my-border";
  //   }
  // }
}
