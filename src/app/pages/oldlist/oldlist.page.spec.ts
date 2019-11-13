import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldlistPage } from './oldlist.page';

describe('OldlistPage', () => {
  let component: OldlistPage;
  let fixture: ComponentFixture<OldlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
