import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPage } from './cart.page';
import { TaxPipe } from 'src/app/modules/shared/tax.pipe';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from 'src/app/stores/cart.reducer';

describe('CartPage', () => {
  let component: CartPage;
  let fixture: ComponentFixture<CartPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartPage, TaxPipe],
      imports: [StoreModule.forRoot({ cart: cartReducer })]
    });
    fixture = TestBed.createComponent(CartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
