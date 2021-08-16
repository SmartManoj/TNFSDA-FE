import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfoLoginComponent } from './sfo-login.component';

describe('SfoLoginComponent', () => {
  let component: SfoLoginComponent;
  let fixture: ComponentFixture<SfoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfoLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
