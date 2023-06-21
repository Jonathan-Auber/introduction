import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'a[no-open]',
})
export class NoOpenDirective {
  @HostListener('click')
  onClickEvent() {
    console.log('Je bloque le lien');

    return false;
  }
}
