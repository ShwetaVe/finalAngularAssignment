import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketscoreComponent } from './cricketscore.component';

describe('CricketscoreComponent', () => {
  let component: CricketscoreComponent;
  let fixture: ComponentFixture<CricketscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
