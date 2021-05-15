import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanipaniComponent } from './thanipani.component';

describe('ThanipaniComponent', () => {
  let component: ThanipaniComponent;
  let fixture: ComponentFixture<ThanipaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanipaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanipaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
