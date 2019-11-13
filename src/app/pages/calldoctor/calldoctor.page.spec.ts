import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalldoctorPage } from './calldoctor.page';

describe('CalldoctorPage', () => {
  let component: CalldoctorPage;
  let fixture: ComponentFixture<CalldoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalldoctorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalldoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
