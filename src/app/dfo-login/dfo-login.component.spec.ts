import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfoLoginComponent } from './dfo-login.component';

describe('DfoLoginComponent', () => {
  let component: DfoLoginComponent;
  let fixture: ComponentFixture<DfoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DfoLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DfoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
