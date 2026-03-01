/* eslint-disable @angular-eslint/directive-selector */
import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[imageErrorHandler]',
})
export class ImageErrorHandlerDirective {
  private readonly el = inject(ElementRef);

  @HostListener('error')
  onError() {
    this.el.nativeElement.style.display = 'none';
  }
}
