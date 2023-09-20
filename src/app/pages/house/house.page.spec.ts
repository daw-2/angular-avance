import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousePage } from './house.page';
import { HousingService } from 'src/app/services/housing.service';
import { FakeHousingService } from 'src/app/services/fake-housing.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from 'src/app/stores/cart.reducer';

describe('HousePage', () => {
  let component: HousePage;
  let fixture: ComponentFixture<HousePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousePage],
      imports: [RouterTestingModule, StoreModule.forRoot({ cart: cartReducer })],
      providers: [{ provide: HousingService, useExisting: FakeHousingService }]
    });
    fixture = TestBed.createComponent(HousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
