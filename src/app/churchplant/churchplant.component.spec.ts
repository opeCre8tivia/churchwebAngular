import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchplantComponent } from './churchplant.component';

describe('ChurchplantComponent', () => {
  let component: ChurchplantComponent;
  let fixture: ComponentFixture<ChurchplantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurchplantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
