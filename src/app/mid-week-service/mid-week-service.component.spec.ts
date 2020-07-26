import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidWeekServiceComponent } from './mid-week-service.component';

describe('MidWeekServiceComponent', () => {
  let component: MidWeekServiceComponent;
  let fixture: ComponentFixture<MidWeekServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidWeekServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidWeekServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
