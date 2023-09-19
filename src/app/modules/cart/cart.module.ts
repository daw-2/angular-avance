import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartPage } from './pages/cart/cart.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartPage
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CartPage }
    ]),
  ],
  exports: [
    CartPage,
  ],
})
export class CartModule { }
