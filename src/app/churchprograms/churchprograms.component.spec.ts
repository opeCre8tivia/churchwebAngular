import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchprogramsComponent } from './churchprograms.component';

describe('ChurchprogramsComponent', () => {
  let component: ChurchprogramsComponent;
  let fixture: ComponentFixture<ChurchprogramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurchprogramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
