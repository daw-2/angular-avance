import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePage } from './house.page';

describe('HousePage', () => {
  let component: HousePage;
  let fixture: ComponentFixture<HousePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousePage]
    });
    fixture = TestBed.createComponent(HousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
