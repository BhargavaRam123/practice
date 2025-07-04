import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesdemonstrationComponent } from './pipesdemonstration.component';

describe('PipesdemonstrationComponent', () => {
  let component: PipesdemonstrationComponent;
  let fixture: ComponentFixture<PipesdemonstrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesdemonstrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesdemonstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
