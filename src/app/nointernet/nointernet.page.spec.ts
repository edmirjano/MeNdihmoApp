import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NointernetPage } from './nointernet.page';

describe('NointernetPage', () => {
  let component: NointernetPage;
  let fixture: ComponentFixture<NointernetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NointernetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NointernetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
