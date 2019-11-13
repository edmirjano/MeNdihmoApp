import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiledonatorPage } from './profiledonator.page';

describe('ProfiledonatorPage', () => {
  let component: ProfiledonatorPage;
  let fixture: ComponentFixture<ProfiledonatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiledonatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfiledonatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
