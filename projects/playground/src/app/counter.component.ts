import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <p>Compteur : {{ count }}</p>
    <div>
      <button (click)="decrement()" type="text">- décrémenter</button>
      <button (click)="increment()" type="text">+ incrémenter</button>
    </div>
  `,
  styles: [
    `
      p {
        text-align: center;
      }
      div {
        margin: auto;
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      span {
        display: block;
      }

      button {
        width: 40%;
      }
    `,
  ],
})
export class CounterComponent {
  @Input('initial-value')
  count = 0;

  //   @Input('initial-value')
  //   initialValue = 0;
  @Input()
  step = 1;

  decrement() {
    this.count -= this.step;
  }

  increment() {
    this.count += this.step;
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {}
}
