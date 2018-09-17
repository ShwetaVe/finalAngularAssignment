import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentatorComponent } from './commentator.component';

describe('CommentatorComponent', () => {
  let component: CommentatorComponent;
  let fixture: ComponentFixture<CommentatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
