import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvangelisimComponent } from './evangelisim.component';

describe('EvangelisimComponent', () => {
  let component: EvangelisimComponent;
  let fixture: ComponentFixture<EvangelisimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvangelisimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvangelisimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
