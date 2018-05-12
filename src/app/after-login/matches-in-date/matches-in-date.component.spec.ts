import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesInDateComponent } from './matches-in-date.component';

describe('MatchesInDateComponent', () => {
  let component: MatchesInDateComponent;
  let fixture: ComponentFixture<MatchesInDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesInDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesInDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
