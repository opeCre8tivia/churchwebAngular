import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenSundayComponent } from './women-sunday.component';

describe('WomenSundayComponent', () => {
  let component: WomenSundayComponent;
  let fixture: ComponentFixture<WomenSundayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenSundayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenSundayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
