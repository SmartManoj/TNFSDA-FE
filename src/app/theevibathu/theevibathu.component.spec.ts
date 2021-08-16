import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheevibathuComponent } from './theevibathu.component';

describe('TheevibathuComponent', () => {
  let component: TheevibathuComponent;
  let fixture: ComponentFixture<TheevibathuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheevibathuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheevibathuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
