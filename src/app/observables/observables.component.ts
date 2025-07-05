import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SubjectService } from '../services/subject/subject.service';

@Component({
  selector: 'app-observables',
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css',
})
export class ObservablesComponent implements OnInit, OnDestroy {
  constructor(private subject: SubjectService) {
    this.subject.sub.subscribe({
      next: (val) => {
        console.log('here is the subject value', val);
      },
    });
    this.subject.beh.subscribe({
      next: (val) => {
        console.log('here is the behavorial value', val);
      },
    });
  }
  private subscription?: Subscription;
  val = 10;
  obs = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete(); // Don't forget to complete!
  });

  ngOnInit() {
    this.subscription = this.obs.subscribe({
      next: (value) => {
        // console.log('hello world');
        // console.log('Received:', value);
      },
      error: (error) => console.error('Error:', error),
      complete: () => console.log('Observable completed'),
    });
  }

  ngOnDestroy() {
    // Clean up subscription to prevent memory leaks
    this.subscription?.unsubscribe();
  }
  handleclick() {
    this.subject.onClick(this.val);
    this.val = this.val + 10;
  }
  handleclickbeh() {
    this.subject.onClickbeh(this.val);
    this.val = this.val + 10;
  }
  addnewObserver() {
    console.log('new observer added ');
    this.subject.sub.subscribe({
      next: (val) => {
        console.log('value for listener two', val);
      },
    });
  }
  addnewObserverbehavioural() {
    console.log('new observer behave added ');
    this.subject.beh.subscribe({
      next: (val) => {
        console.log('value for listener two behave', val);
      },
    });
  }
}
