// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-lifecyclehooks',
//   imports: [],
//   templateUrl: './lifecyclehooks.component.html',
//   styleUrl: './lifecyclehooks.component.css'
// })
// export class LifecyclehooksComponent {

// }

import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h1>child component</h1>
    <p>Ticks:{{ lifecycleticks }}</p>
    <p>Data:{{ data() }}</p>
  `,
})
export class childcomponent implements OnChanges {
  data = input();
  lifecycleticks: number = 0;
  ngOnChanges(changes: SimpleChanges): void {
    this.lifecycleticks++;
    console.log('changes value', changes);
  }
}
@Component({
  selector: 'app-parent',
  template: `
    <h1>ngonchanges example</h1>
    <app-child [data]="arbitraryData"></app-child>
  `,
  imports: [childcomponent],
})
export class parentComponent {
  arbitraryData: string = 'initial';
  constructor() {
    // setInterval(() => {
    //   this.arbitraryData += 'final';
    // }, 5000);
  }
}
