import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[confirm]',
})
export class ConfirmDirective {
  @Input('confirm-message')
  confirmMessage = 'Êtes-vous sur?';

  @HostListener('click', ['$event'])
  onClickEvent() {
    return window.confirm(this.confirmMessage);
  }
}
