import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-simple-example',
  template: `
    <h2>ngDoCheck Simple Example</h2>
    <p>User: {{ user.name }} ({{ user.age }} years old)</p>
    <p>Check count: {{ checkCount }}</p>

    <button (click)="changeName()">Change Name</button>
    <button (click)="changeAge()">Change Age</button>
    <button (click)="addProperty()">Add Property</button>
  `,
})
export class ExampleComponent implements DoCheck {
  checkCount = 0;

  user = {
    name: 'John',
    age: 25,
  };

  // Store previous values to detect changes
  previousUser = { ...this.user };

  ngDoCheck() {
    this.checkCount++;
    console.log('ngDoCheck called - Check #' + this.checkCount);

    // Check if user object properties have changed
    if (
      this.user.name !== this.previousUser.name ||
      this.user.age !== this.previousUser.age
    ) {
      console.log('User data changed!');
      console.log('Previous:', this.previousUser);
      console.log('Current:', this.user);

      // Update our tracking object
      this.previousUser = { ...this.user };
    }
  }

  changeName() {
    this.user.name = this.user.name === 'John' ? 'Jane' : 'John';
  }

  changeAge() {
    this.user.age++;
  }

  addProperty() {
    // Adding a new property to the object
    (this.user as any).city = 'New York';
    console.log('Added city property');
  }
}
