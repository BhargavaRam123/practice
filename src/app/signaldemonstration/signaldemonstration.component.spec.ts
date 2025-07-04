import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignaldemonstrationComponent } from './signaldemonstration.component';

describe('SignaldemonstrationComponent', () => {
  let component: SignaldemonstrationComponent;
  let fixture: ComponentFixture<SignaldemonstrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignaldemonstrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignaldemonstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
