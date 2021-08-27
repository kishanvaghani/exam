import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyLoginComponent } from './fancy-login.component';

describe('FancyLoginComponent', () => {
  let component: FancyLoginComponent;
  let fixture: ComponentFixture<FancyLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancyLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
