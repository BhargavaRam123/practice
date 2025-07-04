import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { customPipe } from '../pipes/custompipe';
@Component({
  selector: 'app-pipesdemonstration',
  imports: [CommonModule, customPipe],
  templateUrl: './pipesdemonstration.component.html',
  styleUrl: './pipesdemonstration.component.css',
})
export class PipesdemonstrationComponent {
  price: number = 122538;
  date = new Date();
  myObject: any = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
  };
  myArray: any[] = ['apple', 'banana', 'orange', 'grape', 'mango'];
  myString: string = 'This is a long string.';
  prom = Promise.resolve('hey bhargav');
}
