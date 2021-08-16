import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireCallFeedingComponent } from './fire-call-feeding.component';

describe('FireCallFeedingComponent', () => {
  let component: FireCallFeedingComponent;
  let fixture: ComponentFixture<FireCallFeedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireCallFeedingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireCallFeedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
