import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilevolunteerPage } from './profilevolunteer.page';

describe('ProfilevolunteerPage', () => {
  let component: ProfilevolunteerPage;
  let fixture: ComponentFixture<ProfilevolunteerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilevolunteerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilevolunteerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
