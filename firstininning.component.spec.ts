import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstininningComponent } from './firstininning.component';

describe('FirstininningComponent', () => {
  let component: FirstininningComponent;
  let fixture: ComponentFixture<FirstininningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstininningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstininningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
