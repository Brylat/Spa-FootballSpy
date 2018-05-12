import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingSiteComponent } from './upcoming-site.component';

describe('UpcomingSiteComponent', () => {
  let component: UpcomingSiteComponent;
  let fixture: ComponentFixture<UpcomingSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
