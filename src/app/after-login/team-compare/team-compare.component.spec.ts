import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCompareComponent } from './team-compare.component';

describe('TeamCompareComponent', () => {
  let component: TeamCompareComponent;
  let fixture: ComponentFixture<TeamCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
