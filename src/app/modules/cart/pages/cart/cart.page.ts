import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { House } from 'src/app/models/house';
import { AppState, selectMode } from 'src/app/stores/cart.reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.css']
})
export class CartPage {
  rents!: House[];

  constructor(private store: Store<AppState>) {
    this.store.select(selectMode('rent')).subscribe(items => this.rents = items);
  }
}
