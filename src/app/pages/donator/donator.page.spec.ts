import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorPage } from './donator.page';

describe('DonatorPage', () => {
  let component: DonatorPage;
  let fixture: ComponentFixture<DonatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
