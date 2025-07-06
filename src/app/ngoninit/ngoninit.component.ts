import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childoninit',
  template: `
    <h3>Child Component</h3>
    <p>TICKS: {{ lifecycleTicks }}</p>
    <p>DATA: {{ data() }}</p>
  `,
})
export class ChildComponentngonint implements OnInit {
  data = input();
  lifecycleTicks: number = 0;

  ngOnInit() {
    this.lifecycleTicks++;
  }
}

@Component({
  selector: 'app-parentoninit',
  template: `
    <h1>ngOnInit Example</h1>
    <app-childoninit [data]="arbitraryData"></app-childoninit>
  `,
  imports: [ChildComponentngonint],
})
export class ParentComponentngoninit {
  arbitraryData: string = 'initial';

  constructor() {
    setTimeout(() => {
      this.arbitraryData = 'final';
    }, 5000);
  }
}
