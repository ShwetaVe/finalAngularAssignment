import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulematchComponent } from './schedulematch.component';

describe('SchedulematchComponent', () => {
  let component: SchedulematchComponent;
  let fixture: ComponentFixture<SchedulematchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulematchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulematchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
