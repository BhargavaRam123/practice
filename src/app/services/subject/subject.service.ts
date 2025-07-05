import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  sub = new Subject();
  beh = new BehaviorSubject(1);
  constructor() {}
  onClick(val: any) {
    this.sub.next(val);
  }
  onClickbeh(val: any) {
    this.beh.next(val);
  }
}
