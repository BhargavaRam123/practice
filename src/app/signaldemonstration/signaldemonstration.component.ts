import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signaldemonstration',
  imports: [],
  templateUrl: './signaldemonstration.component.html',
  styleUrl: './signaldemonstration.component.css',
})
export class SignaldemonstrationComponent {
  x = signal(1);
  y = effect(() => console.log('hey the value is', this.x()));
  sum = computed(() => {
    console.log('hey computed is called');
    return this.x() + 1000;
  });
  changeFunction(e: any) {
    console.log('hello world', e.target.value);
    setTimeout(() => {
      this.x.set(e.target.value + 10);
      this.x.set(500 + yo);
    }, 2000);
    const yo = 10;
    console.log('we want async way!!!!!!!!!');
  }
}
