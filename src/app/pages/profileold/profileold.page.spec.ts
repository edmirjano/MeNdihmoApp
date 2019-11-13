import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileoldPage } from './profileold.page';

describe('ProfileoldPage', () => {
  let component: ProfileoldPage;
  let fixture: ComponentFixture<ProfileoldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileoldPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileoldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
