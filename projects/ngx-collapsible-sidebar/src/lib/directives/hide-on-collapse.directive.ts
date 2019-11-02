import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[ngxHideOnCollapse]'
})
export class HideOnCollapseDirective {
  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'hide-on-collapse');
  }
}

