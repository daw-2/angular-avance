import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRentPage } from './house-rent.page';

describe('HouseRentPage', () => {
  let component: HouseRentPage;
  let fixture: ComponentFixture<HouseRentPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseRentPage]
    });
    fixture = TestBed.createComponent(HouseRentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
