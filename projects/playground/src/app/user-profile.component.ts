import { Component, Directive, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'user-profile',
  template: `
    <h3 [class.hired]="isHired">{{ firstName }} {{ lastName | uppercase }}</h3>
    <img [src]="avatar" alt="" />
    Métier :
    <strong
      >{{ job }} ({{ revenue | currency : 'EUR' : 'symbol' }} / mois)</strong
    >
    <button (click)="onClickButton($event.clientX)">Embaucher</button>
    <input
      (keydown.enter)="onKeyboardTap($event)"
      type="text"
      placeholder="Nouveau prénom"
    />
  `,
  styles: [
    `
      .hired {
        background-color: green;
      }
      h3 {
        color: blue;
      }
    `,
  ],
})
export class UserProfileComponent {
  @Input('first-name')
  firstName = '';
  @Input('last-name')
  lastName = '';
  @Input()
  job = '';
  @Input('hired')
  isHired = false;

  onKeyboardTap(event: Event) {
    this.firstName = (event.target as HTMLInputElement).value;
  }

  onClickButton(coordX: number) {
    this.isHired = true;
    console.log(coordX);
  }

  avatar = 'https://via.placeholder.com/30';

  revenue = 1200;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    // this.elementRef.nativeElement.innerHTML = ;
  }
}
