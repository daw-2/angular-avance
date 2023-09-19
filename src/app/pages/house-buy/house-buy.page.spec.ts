import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseBuyPage } from './house-buy.page';

describe('HouseBuyPage', () => {
  let component: HouseBuyPage;
  let fixture: ComponentFixture<HouseBuyPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseBuyPage]
    });
    fixture = TestBed.createComponent(HouseBuyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
