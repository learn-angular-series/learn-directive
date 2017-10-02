import { Component, ElementRef, HostListener, HostBinding, OnInit, Input } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input() 
  highlightColor: string;

  private containerEl:any;

  constructor(private el: ElementRef) {
    
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.el.nativeElement);
    console.log(this.el.nativeElement.childNodes);
    console.log(this.el.nativeElement.childNodes[0]);
    console.log(this.el.nativeElement.innerHTML);

    this.containerEl=this.el.nativeElement.childNodes[0];
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.containerEl.style.backgroundColor = color;
  }
}
