import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondininningComponent } from './secondininning.component';

describe('SecondininningComponent', () => {
  let component: SecondininningComponent;
  let fixture: ComponentFixture<SecondininningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondininningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondininningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
